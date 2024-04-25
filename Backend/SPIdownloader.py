import requests
import SPIConverter
from geo.Geoserver import Geoserver

# #URL that was received from drought.gov for SPI 1 month data
# url = "https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo/GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo.tif"

# #(optional, will adjust as needed)
# filename = "global_spi_1month.tif"

indexes_spi = {"global_spi_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-1mo/GLOBAL-GPM_DAILY-spi-1mo.tif",
           "global_spi_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-2mo/GLOBAL-GPM_DAILY-spi-2mo.tif",
           "global_spi_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-3mo/GLOBAL-GPM_DAILY-spi-3mo.tif",
           "global_spi_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-6mo/GLOBAL-GPM_DAILY-spi-6mo.tif",
           "global_spi_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-9mo/GLOBAL-GPM_DAILY-spi-9mo.tif",
           "global_spi_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-spi-12mo/GLOBAL-GPM_DAILY-spi-12mo.tif"}

indexes_precip = {"global_precip_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-1mo/GLOBAL-GPM_DAILY-precip-1mo.tif",
           "global_precip_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-2mo/GLOBAL-GPM_DAILY-precip-2mo.tif",
           "global_precip_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-3mo/GLOBAL-GPM_DAILY-precip-3mo.tif",
           "global_precip_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-6mo/GLOBAL-GPM_DAILY-precip-6mo.tif",
           "global_precip_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-9mo/GLOBAL-GPM_DAILY-precip-9mo.tif",
           "global_precip_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip-12mo/GLOBAL-GPM_DAILY-precip-12mo.tif"}

indexes_precip_percent = {"global_precip_percent_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-1mo/GLOBAL-GPM_DAILY-precip_percent-1mo.tif",
           "global_precip_percent_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-2mo/GLOBAL-GPM_DAILY-precip_percent-2mo.tif",
           "global_precip_percent_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-3mo/GLOBAL-GPM_DAILY-precip_percent-3mo.tif",
           "global_precip_percent_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-6mo/GLOBAL-GPM_DAILY-precip_percent-6mo.tif",
           "global_precip_percent_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-9mo/GLOBAL-GPM_DAILY-precip_percent-9mo.tif",
           "global_precip_percent_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-GPM_DAILY-precip_percent-12mo/GLOBAL-GPM_DAILY-precip_percent-12mo.tif"}

indexes_speih = {"global_speih_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-1mo/GLOBAL-ERA5-speih-1mo.tif",
           "global_speih_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-2mo/GLOBAL-ERA5-speih-2mo.tif",
           "global_speih_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-3mo/GLOBAL-ERA5-speih-3mo.tif",
           "global_speih_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-6mo/GLOBAL-ERA5-speih-6mo.tif",
           "global_speih_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-9mo/GLOBAL-ERA5-speih-9mo.tif",
           "global_speih_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-speih-12mo/GLOBAL-ERA5-speih-12mo.tif"}

indexes_eddih = {"global_speih_1week.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-1wk/GLOBAL-ERA5-eddih-1wk.tif",
           "global_eddih_2week.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-2wk/GLOBAL-ERA5-eddih-2wk.tif",
           "global_eddih_1month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-1mo/GLOBAL-ERA5-eddih-1mo.tif",
           "global_eddih_2month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-2mo/GLOBAL-ERA5-eddih-2mo.tif",
           "global_eddih_3month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-3mo/GLOBAL-ERA5-eddih-3mo.tif",
           "global_eddih_6month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-6mo/GLOBAL-ERA5-eddih-6mo.tif",
           "global_eddih_9month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-9mo/GLOBAL-ERA5-eddih-9mo.tif",
           "global_eddih_12month.tif":"https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-ERA5-eddih-12mo/GLOBAL-ERA5-eddih-12mo.tif"}

index_list =[indexes_spi,indexes_precip,indexes_precip_percent,indexes_speih,indexes_eddih]

def download_spi_data(url, filename):
  # Download and save the file logic
  response = requests.get(url, stream=True)
  if response.status_code == 200:
    with open('./data/'+filename, "wb") as f:
      for chunk in response.iter_content(1024):
        f.write(chunk)
      print(f"{filename} data downloaded successfully to {filename}")
  else:
    print(f"Download failed with status code: {response.status_code}")

def upload_to_server(layer_name, path,geo):
    geo.create_coveragestore(layer_name=layer_name, path=path, workspace='ne')

geo = Geoserver('http://127.0.0.1:8080/geoserver', username='admin', password='geoserver')
for index in index_list:
  for filename, url in index.items():
    download_spi_data(url, filename)
    SPIConverter.convert_SPI_to_Madagascar(filename)
    updated_filename = (filename.split('.')[0] + '_madagascar.tif').replace('global_','')
    upload_to_server(updated_filename, './data/' + filename.split('.')[0] + '_madagascar.tif', geo)
