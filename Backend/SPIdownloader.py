import requests
import SPIConverter
from geo.Geoserver import Geoserver

# #URL that was received from drought.gov for SPI 1 month data
# url = "https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo/GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo.tif"

# #(optional, will adjust as needed)
# filename = "global_spi_1month.tif"

indexes = {"global_spi_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-1mo/GLOBAL-GPM_DAILY-spi-1mo.tif",
           "global_spi_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-2mo/GLOBAL-GPM_DAILY-spi-2mo.tif",
           "global_spi_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-3mo/GLOBAL-GPM_DAILY-spi-3mo.tif",
           "global_spi_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-6mo/GLOBAL-GPM_DAILY-spi-6mo.tif",
           "global_spi_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-9mo/GLOBAL-GPM_DAILY-spi-9mo.tif",
           "global_spi_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-12mo/GLOBAL-GPM_DAILY-spi-12mo.tif"}

def download_spi_data(url, filename):
  # Download and save the file logic
  response = requests.get(url, stream=True)
  if response.status_code == 200:
    with open('./data/'+filename, "wb") as f:
      for chunk in response.iter_content(1024):
        f.write(chunk)
      print(f"SPI data downloaded successfully to {filename}")
  else:
    print(f"Download failed with status code: {response.status_code}")

def upload_to_server(layer_name, path,geo):
    geo.create_coveragestore(layer_name=layer_name, path=path, workspace='ne')

geo = Geoserver('http://127.0.0.1:8080/geoserver', username='admin', password='geoserver')
for filename, url in indexes.items():
  download_spi_data(url, filename)
  SPIConverter.convert_SPI_to_Madagascar(filename)
  updated_filename = (filename.split('.')[0] + '_madagascar.tif').replace('global_','')
  upload_to_server(updated_filename, './data/' + filename.split('.')[0] + '_madagascar.tif', geo)