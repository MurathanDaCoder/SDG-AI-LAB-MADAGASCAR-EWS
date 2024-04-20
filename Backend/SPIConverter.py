import geopandas as gpd
import rasterio
from rasterio.mask import mask

madagascar_boundary = gpd.read_file('./geoBoundaries-MDG-ADM0_simplified.geojson')

with rasterio.open("./GLOBAL-NOAA_CPC_CMORPH-spi-1mo.tif") as src:
    # Crop the image
    out_image, out_transform = mask(src, madagascar_boundary.geometry, crop=True)
    out_meta = src.meta.copy()

    # Update the metadata
    out_meta.update({
        "driver": "GTiff",
        "height": out_image.shape[1],
        "width": out_image.shape[2],
        "transform": out_transform
    })
    # Write the madagascar only spi file
    with rasterio.open('madagascar_spi.tif', 'w', **out_meta) as dest:
        dest.write(out_image)
