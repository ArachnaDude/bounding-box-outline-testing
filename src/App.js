import React, { useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import geoJsonData from "./data/manchesterSmallData.json";
import Clusters from "./Cluster";
import CustomModal from "./CustomModal";

function App() {
  const onEachNode = (node, layer) => {
    const nodeName = node.properties.name;

    layer.bindPopup((nodeName || "Not found") + " ");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  console.log(show);

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
        <Clusters setShow={setShow} data={geoJsonData.features} />
      </MapContainer>
      <CustomModal show={show} onClose={handleClose} />
    </>
  );
}

export default App;
