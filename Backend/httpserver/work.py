from flask import Flask, send_file, abort
from osgeo import gdal
import io
import numpy as np

app = Flask(__name__)

# Open your COG file
ds = gdal.Open('./output.tif')

@app.route('/tiles/<int:zoom>/<int:x>/<int:y>.png')
def get_tile(zoom, x, y):
    try:
        # Compute the tile size
        tile_size = 256
        
        # Calculate bounds of the tile in the coordinate system of the COG
        gt = ds.GetGeoTransform()
        px_min = x * tile_size * 2**zoom
        py_min = y * tile_size * 2**zoom
        px_max = (x + 1) * tile_size * 2**zoom
        py_max = (y + 1) * tile_size * 2**zoom
        
        # Calculate the geographic coordinates
        lon_min, lat_max = px_min * gt[1] + py_min * gt[4] + gt[0], px_min * gt[2] + py_min * gt[5] + gt[3]
        lon_max, lat_min = px_max * gt[1] + py_max * gt[4] + gt[0], px_max * gt[2] + py_max * gt[5] + gt[3]
        
        # Use GDAL to read the tile area
        warp_options = gdal.WarpOptions(format='MEM', outputBounds=[lon_min, lat_min, lon_max, lat_max], outputBoundsSRS='EPSG:4326', width=tile_size, height=tile_size)
        tile_ds = gdal.Warp('', ds, options=warp_options)
        
        # Convert the data to PNG
        driver = gdal.GetDriverByName('PNG')
        png_path = '/vsimem/tile.png'
        driver.CreateCopy(png_path, tile_ds)
        png_file = gdal.VSIFOpenL(png_path, 'rb')
        png_data = gdal.VSIFReadL(png_file, 1, gdal.VSIStatL(png_path).size)
        gdal.VSIFCloseL(png_file)
        gdal.Unlink(png_path)
        
        return send_file(io.BytesIO(png_data), mimetype='image/png')
    except Exception as e:
        print(e)
        abort(404)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
