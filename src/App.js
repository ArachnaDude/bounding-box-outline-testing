import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import geoJsonData from "./data/manchesterSmallData.json";
import NewCluster from "./NewCluster";

function App() {
  const onEachNode = (node, layer) => {
    const nodeName = node.properties.name;

    layer.bindPopup((nodeName || "Not found") + " ");
  };

  return (
    <>
      <MapContainer
        className='leaflet-container'
        center={[53.483959, -2.244644]}
        zoom={18}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <GeoJSON data={geoJsonData.features} onEachFeature={onEachNode} /> */}
        {/* <Clusters setShow={setShow} data={geoJsonData.features} /> */}
        <NewCluster data={geoJsonData.features} />
      </MapContainer>
    </>
  );
}

export default App;
