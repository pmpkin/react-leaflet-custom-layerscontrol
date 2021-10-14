import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Circle,
  FeatureGroup,
  Rectangle
} from "react-leaflet";

import LayersControl2, { ControlledLayerItem } from "./LayerControl2";
import Paper from "@material-ui/core/Paper";
const center = [51.505, -0.09];
const rectangle = [[51.49, -0.08], [51.5, -0.06]];

class MapLeaflet extends Component {
  render() {
    const position = [51.509, -0.03];
    return (
      <Map style={{ height: "100vh" }} center={position} zoom={13}>
        <LayersControl2 position="topright">
          <ControlledLayerItem
            checked={true}
            name="Esri WorldImagery"
            group="BaseLayers"
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
              attribution='&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'
            />
          </ControlledLayerItem>
          <ControlledLayerItem
            checked={false}
            name="OpenStreetMap"
            group="BaseLayers"
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </ControlledLayerItem>
          <ControlledLayerItem
            checked={false}
            name="Rectangle"
            group="Rectangles"
          >
            <Rectangle bounds={rectangle} />
          </ControlledLayerItem>

          <ControlledLayerItem checked={false} name="2 circles" group="Circles">
            <FeatureGroup color="purple">
              <Circle center={[51.51, -0.06]} radius={200} />
              <Circle center={[51.58, -0.06]} radius={200} />
            </FeatureGroup>
          </ControlledLayerItem>
          <ControlledLayerItem checked={false} name="1 circle" group="Circles">
            <FeatureGroup color="blue">
              <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
          </ControlledLayerItem>
        </LayersControl2>
      </Map>
    );
  }
}

export default MapLeaflet;
