import { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, LayerGroup, WMSTileLayer, useMap } from 'react-leaflet';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
  Modal,
  Typography,
  IconButton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import './Map.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
// Define all categories of layers with their respective details
const layers = {
  SPI: [
    { name: 'SPI 1 Month', layer: 'ne:spi_1month_madagascar.tif' },
    { name: 'SPI 2 Months', layer: 'ne:spi_2month_madagascar.tif' },
    { name: 'SPI 3 Months', layer: 'ne:spi_3month_madagascar.tif' },
    { name: 'SPI 6 Months', layer: 'ne:spi_6month_madagascar.tif' },
    { name: 'SPI 9 Months', layer: 'ne:spi_9month_madagascar.tif' },
    { name: 'SPI 12 Months', layer: 'ne:spi_12month_madagascar.tif' },
  ],
  Precipitation: [
    { name: 'Precipitation 1 Month', layer: 'ne:precip_1month_madagascar.tif' },
    { name: 'Precipitation 2 Months', layer: 'ne:precip_2month_madagascar.tif' },
    { name: 'Precipitation 3 Months', layer: 'ne:precip_3month_madagascar.tif' },
    { name: 'Precipitation 6 Months', layer: 'ne:precip_6month_madagascar.tif' },
    { name: 'Precipitation 9 Months', layer: 'ne:precip_9month_madagascar.tif' },
    { name: 'Precipitation 12 Months', layer: 'ne:precip_12month_madagascar.tif' },
  ],
  Precipitation_percent: [
    { name: 'Precip Percent 1 Month', layer: 'ne:precip_percent_1month_madagascar.tif' },
    { name: 'Precip Percent 2 Months', layer: 'ne:precip_percent_2month_madagascar.tif' },
    { name: 'Precip Percent 3 Months', layer: 'ne:precip_percent_3month_madagascar.tif' },
    { name: 'Precip Percent 6 Months', layer: 'ne:precip_percent_6month_madagascar.tif' },
    { name: 'Precip Percent 9 Months', layer: 'ne:precip_percent_9month_madagascar.tif' },
    { name: 'Precip Percent 12 Months', layer: 'ne:precip_percent_12month_madagascar.tif' },
  ],
  SPEI: [
    { name: 'SPEI 1 Month', layer: 'ne:speih_1month_madagascar.tif' },
    { name: 'SPEI 2 Months', layer: 'ne:speih_2month_madagascar.tif' },
    { name: 'SPEI 3 Months', layer: 'ne:speih_3month_madagascar.tif' },
    { name: 'SPEI 6 Months', layer: 'ne:speih_6month_madagascar.tif' },
    { name: 'SPEI 9 Months', layer: 'ne:speih_9month_madagascar.tif' },
    { name: 'SPEI 12 Months', layer: 'ne:speih_12month_madagascar.tif' },
  ],
  EDDI: [
    { name: 'EDDI 1 Week', layer: 'ne:eddih_1week_madagascar.tif' },
    { name: 'EDDI 2 Weeks', layer: 'ne:eddih_2week_madagascar.tif' },
    { name: 'EDDI 1 Month', layer: 'ne:eddih_1month_madagascar.tif' },
    { name: 'EDDI 2 Months', layer: 'ne:eddih_2month_madagascar.tif' },
    { name: 'EDDI 3 Months', layer: 'ne:eddih_3month_madagascar.tif' },
    { name: 'EDDI 6 Months', layer: 'ne:eddih_6month_madagascar.tif' },
    { name: 'EDDI 9 Months', layer: 'ne:eddih_9month_madagascar.tif' },
    { name: 'EDDI 12 Months', layer: 'ne:eddih_12month_madagascar.tif' },
  ]
};

const indexInfo = {
  SPI: "The Standardized Precipitation Index (SPI) is used to monitor droughts and unusually wet events. It is calculated over different timescales to reflect short and long-term trends.",
  Precipitation: "Precipitation data measures the amount of precipitation over a certain area and time period. This index helps in understanding rainfall patterns which are crucial for agricultural planning and flood prevention.",
  Precipitation_percent: "This index represents the percentage of normal precipitation received over a specific time period compared to a long-term average. It is useful for identifying deviations from typical rainfall patterns.",
  SPEI: "The Standardized Precipitation Evapotranspiration Index (SPEI) combines temperature and precipitation data to determine drought conditions. It accounts for evaporation and transpiration and provides a more comprehensive drought assessment.",
  EDDI: "The Evaporative Demand Drought Index (EDDI) measures the atmospheric demand for water in the form of evaporation. It is an indicator of drought, showing how quickly a landscape can dry out."
};

const LegendControl = ({ }) => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'topright' });

    legend.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info legend');
      this._div.style.padding = '6px 8px';
      this._div.style.backgroundColor = 'white';
      this._div.style.borderRadius = '5px';
      this._div.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
      this._div.style.fontSize = '0.9rem';
      this._div.style.width = '100px';
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000]; // Dummy thresholds
      const colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026']; // Dummy colors

      let labels = ['<strong>Legend</strong>'];
      grades.forEach((grade, index) => {
        labels.push(
          `<p><i style="background:${colors[index]};width:18px;height:18px;float:left;"></i>&nbsp;${grade}${grades[index + 1] ? `&ndash;${grades[index + 1]}` : '+'}</p>`
        );
      });
      console.log(labels);
      this._div.innerHTML = labels.join('');
      return this._div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, []); // This effect does not depend on any states or props

  return null;
};

const DataSummaryControl = ({ layers, indexInfo, selectedLayers }) => {
  const map = useMap();

  useEffect(() => {
    const control = L.control({ position: 'bottomright' });

    control.onAdd = function () {
      this._div = L.DomUtil.create('div', 'data-summary');
      this._div.style.backgroundColor = 'white';
      this._div.style.padding = '10px 15px';
      this._div.style.borderRadius = '5px';
      this._div.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
      this._div.style.width = '250px';
      this._div.style.maxHeight = '150px';
      this._div.style.overflowY = 'auto';
      this._div.style.fontSize = '0.9rem';
      this._div.style.display = 'none';  // Initially hidden
      this.updateContent(); // Initialize content
      return this._div;
    };

    control.updateContent = () => {
      if (!control._div) return; // Ensure the div is available
      if (Object.keys(selectedLayers).length === 0) {
        control._div.style.display = 'none'; // Hide div if no data is selected
      } else {
        control._div.innerHTML = ''; // Clear previous content
        control._div.style.display = 'block'; // Ensure div is visible when there are selected layers
        Object.entries(selectedLayers).forEach(([category, layer]) => {
          const layerDetail = layers[category].find(l => l.layer === layer);
          if (layerDetail) {
            const infoText = `${layerDetail.name}: ${indexInfo[category]}`;
            control._div.innerHTML += `<p style="margin: 5px 0;">${infoText}</p>`;
          }
        });
      }
    };

    control.addTo(map); // Add control to the map

    return () => {
      control.remove(); // Clean up control when component unmounts
    };
  }, [selectedLayers]); // Re-run effect when selectedLayers changes

  return null;
};


export default function Map() {
  const [selectedLayers, setSelectedLayers] = useState({});
  const [toggles, setToggles] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleToggleChange = (category) => {
    const currentlyToggled = toggles[category];
    const newToggles = { ...toggles, [category]: !currentlyToggled };
    setToggles(newToggles);
    if (!currentlyToggled) {
      setSelectedLayers({ ...selectedLayers, [category]: layers[category][0].layer });
    } else {
      const newLayers = { ...selectedLayers };
      delete newLayers[category];
      setSelectedLayers(newLayers);
    }
  };

  const handleLayerChange = (event, category) => {
    setSelectedLayers({ ...selectedLayers, [category]: event.target.value });
  };

  const handleOpenModal = (info) => {
    setModalContent(info);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flex: 1, padding: '20px' }}>
        <FormGroup>
          {Object.keys(layers).map((category) => (
            <Box key={category}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <FormControlLabel
                  control={<Switch checked={!!toggles[category]} onChange={() => handleToggleChange(category)} />}
                  label={category.toUpperCase()}
                  labelPlacement="end"
                  sx={{ flexGrow: 1 }}
                />
                <IconButton onClick={() => handleOpenModal(indexInfo[category] || "No additional information available.")} size="small">
                  <InfoIcon />
                </IconButton>
              </Box>
              {toggles[category] && (
                <FormControl fullWidth sx={{ marginTop: '8px' }}>
                  <InputLabel id={`${category}-label`}>{category.toUpperCase()}</InputLabel>
                  <Select
                    labelId={`${category}-label`}
                    value={selectedLayers[category] || ''}
                    label={category.toUpperCase()}
                    onChange={(e) => handleLayerChange(e, category)}
                  // style={{ marginLeft: '20px', marginRight: '20px' }}
                  >
                    {layers[category].map((layer) => (
                      <MenuItem key={layer.name} value={layer.layer}>
                        {layer.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
          ))}
        </FormGroup>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Information
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalContent}
            </Typography>
          </Box>
        </Modal>
      </Box>
      <Box sx={{ flex: 6, height: '100%' }}>
        <MapContainer center={[-19.373, 46.704]} zoom={6} style={{ width: '100%', height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {Object.entries(selectedLayers).map(([category, layer]) =>
            layer ? (
              <LayerGroup key={layer}>
                <WMSTileLayer
                  url="http://localhost:8080/geoserver/ne/wms"
                  layers={layer}
                  format="image/png"
                  transparent={true}
                />
              </LayerGroup>
            ) : null
          )}
          <DataSummaryControl layers={layers} indexInfo={indexInfo} selectedLayers={selectedLayers} />
          <LegendControl />
        </MapContainer>
      </Box>
    </Box>
  );
}


// function Legend() {
//   const map = useMap();

//   React.useEffect(() => {
//     const legend = L.control({ position: "topright" });

//     legend.onAdd = function () {
//       const div = L.DomUtil.create("div", "info legend");
//       div.innerHTML +=
//         '<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ne:layer1" alt="legend">';
//       return div;
//     };

//     legend.addTo(map);

//     // Cleanup function on unmount
//     return () => {
//       legend.remove();
//     };
//   }, [map]);

//   return null;
// }

