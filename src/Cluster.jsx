import React, { useCallback, useEffect, useState } from "react";
import L from "leaflet";
import useSupercluster from "use-supercluster";
import { Marker, GeoJSON, useMap, Popup } from "react-leaflet";

const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }
  return icons[count];
};

const Cluster = ({ data, setShow }) => {
  const maxZoom = 22;
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  const map = useMap();

  function updateMap() {
    console.log("updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  const points = data.map((crime) => {
    const coordinatesArr = () => {};

    return {
      type: "Feature",
      properties: {
        cluster: false,
        crimeId: crime.id,
        category: crime.category,
      },
      geometry: {
        type: "Point",
        coordinates: [...crime.geometry.coordinates],
      },
    };
  });

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  console.log(clusters.length);

  return (
    <>
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        if (isCluster) {
          return (
            <GeoJSON
              key={`cluster-${cluster.id}`}
              data={cluster}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        return (
          <GeoJSON key={`crime-${cluster.properties.crimeId}`} data={cluster}>
            <Popup>
              <button onClick={() => setShow(true)}>Open Modal</button>
            </Popup>
          </GeoJSON>
        );
      })}
    </>
  );
};

export default Cluster;
