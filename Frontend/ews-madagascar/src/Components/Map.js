import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  WMSTileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";
import "./Map.css";
const layerInfo = [
  {
    name: "NCLIMGRID Daily SPI 12mo",
    url: "http://localhost:8080/geoserver/ne/wms",
    layer: "ne:NCLIMGRID_DAILY-spi-12mo",
  },
  {
    name: "Layer 2",
    url: "geoserver_wms_url",
    layer: "geoserver_layer_name",
  },
  {
    name: "Layer 3",
    url: "geoserver_wms_url",
    layer: "geoserver_layer_name",
  },
  {
    name: "Layer 4",
    url: "geoserver_wms_url",
    layer: "geoserver_layer_name",
  },
  {
    name: "Layer 5",
    url: "geoserver_wms_url",
    layer: "geoserver_layer_name",
  },
];

export default function Map() {
  const [activeLayers, setActiveLayers] = useState([]);

  const toggleLayer = (layerName) => {
    if (activeLayers.includes(layerName)) {
      setActiveLayers(activeLayers.filter((name) => name !== layerName));
    } else {
      setActiveLayers([...activeLayers, layerName]);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flex: 1, padding: "20px" }}>
        <FormGroup>
          {layerInfo.map((layer) => (
            <FormControlLabel
              control={
                <Switch
                  checked={activeLayers.includes(layer.name)}
                  onChange={() => toggleLayer(layer.name)}
                />
              }
              label={layer.name}
              key={layer.name}
            />
          ))}
        </FormGroup>
      </Box>
      <Box sx={{ flex: 6, height: "100%" }}>
        <MapContainer
          center={[-19.373, 46.704]}
          zoom={6}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {layerInfo.map((layer) =>
            activeLayers.includes(layer.name) ? (
              <LayerGroup key={layer.name}>
                <WMSTileLayer
                  url={layer.url}
                  layers={layer.layer}
                  format="image/png"
                  transparent={true}
                />
              </LayerGroup>
            ) : null
          )}
          <Legend />
        </MapContainer>
      </Box>
    </Box>
  );
}

function Legend() {
  const map = useMap();

  React.useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend");
      div.innerHTML +=
        '<img src="http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=ne:NCLIMGRID_DAILY-spi-12mo&STYLE=testspi" alt="legend">';
      return div;
    };

    legend.addTo(map);

    // Cleanup function on unmount
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}
