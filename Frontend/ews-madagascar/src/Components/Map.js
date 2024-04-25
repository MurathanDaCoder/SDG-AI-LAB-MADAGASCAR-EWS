import React, { useState } from 'react';
import { MapContainer, TileLayer, LayerGroup, WMSTileLayer } from 'react-leaflet';
import { FormControl, InputLabel, Select, MenuItem, Box, FormGroup, FormControlLabel, Switch } from '@mui/material';
import './Map.css';

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


export default function Map() {
  const [selectedLayers, setSelectedLayers] = useState({});
  const [toggles, setToggles] = useState({});

  const handleToggleChange = (category) => {
    const newToggles = { ...toggles, [category]: !toggles[category] };
    setToggles(newToggles);
    // Remove the layer if the toggle is turned off
    if (toggles[category]) {
      const newLayers = { ...selectedLayers };
      delete newLayers[category];
      setSelectedLayers(newLayers);
    }
  };

  const handleLayerChange = (event, category) => {
    const newLayers = { ...selectedLayers, [category]: event.target.value };
    setSelectedLayers(newLayers);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flex: 1, padding: '20px' }}>
        <FormGroup>
          {Object.keys(layers).map((category) => (
            <Box key={category}>
              <FormControlLabel
                control={<Switch checked={!!toggles[category]} onChange={() => handleToggleChange(category)} />}
                label={category}
              />
              {toggles[category] && (
                <FormControl fullWidth>
                  <InputLabel id={`${category}-label`}>{category}</InputLabel>
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
      </Box>
      <Box sx={{ flex: 6, height: '100%' }}>
        <MapContainer
          center={[-19.373, 46.704]}
          zoom={6}
          style={{ width: '100%', height: '100%' }}
        >
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

