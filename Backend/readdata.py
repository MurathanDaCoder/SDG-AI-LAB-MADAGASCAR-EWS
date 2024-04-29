import rasterio
import numpy as np

with rasterio.open('./data/global_eddih_1month_madagascar.tif') as src:
    spi_data = src.read(1)  # Read the first band
    spi_average = spi_data[spi_data != src.nodata]
    print(spi_average)