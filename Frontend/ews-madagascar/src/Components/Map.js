import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  WMSTileLayer,
} from "react-leaflet";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";
import Box from "@mui/material/Box";

const layerInfo = [
  {
    name: "Layer 1",
    url: "geoserver_wms_url",
    layer: "geoserver_layer_name",
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
        </MapContainer>
      </Box>
    </Box>
  );
}
