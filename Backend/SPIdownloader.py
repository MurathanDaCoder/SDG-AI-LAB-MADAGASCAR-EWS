import requests
import schedule

#URL that was received from drought.gov for SPI 1 month data
url = "https://storage.googleapis.com/noaa-nidis-drought-gov-data/current-conditions/tile/v1/ce-GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo/GLOBAL-NOAA_CPC_DAILY_GLOBAL-spi-1mo.tif"

#(optional, will adjust as needed)
filename = "global_spi_1month.tif"

def download_spi_data():
  # Download and save the file logic
  response = requests.get(url, stream=True)
  if response.status_code == 200:
    with open(filename, "wb") as f:
      for chunk in response.iter_content(1024):
        f.write(chunk)
      print(f"SPI data downloaded successfully to {filename}")
  else:
    print(f"Download failed with status code: {response.status_code}")

#Schedule it to run everyday at midnight
schedule.every().day.at("00:00").do(download_spi_data)

while True:
  schedule.run_pending()