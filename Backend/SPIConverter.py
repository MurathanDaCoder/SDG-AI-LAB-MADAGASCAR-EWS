import geopandas as gpd
import rasterio
from rasterio.mask import mask

# Load the boundary of Madagascar
madagascar_boundary = gpd.read_file('./geoBoundaries-MDG-ADM0_simplified.geojson')

with rasterio.open("./GLOBAL-NOAA_CPC_CMORPH-spi-1mo.tif") as src:
    # Crop the image to the boundary of Madagascar, using the mask function with filled=False so that areas outside the shape are transparent (NoData)
    out_image, out_transform = mask(src, madagascar_boundary.geometry, crop=True, filled=False)
    out_meta = src.meta.copy()

    # Update the metadata
    out_meta.update({
        "driver": "GTiff",
        "height": out_image.shape[1],
        "width": out_image.shape[2],
        "transform": out_transform,
        "nodata": -9999  # Notee: Make sure this is a suitable NoData value for the dataset
    })
    
    # Write the cropped and masked raster
    with rasterio.open('madagascar_spi.tif', 'w', **out_meta) as dest:
        dest.write(out_image)
        # Write the mask to the output raster, making NoData areas transparent
        dest.write_mask(out_image.mask)
