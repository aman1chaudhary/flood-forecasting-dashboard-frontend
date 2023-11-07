import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet-geotiff-2';
import 'leaflet-geotiff-2/dist/leaflet-geotiff-rgb';
import 'leaflet-geotiff-2/dist/leaflet-geotiff-plotty';

const RasterMap = ({ url,options }) => {
  const map = useMap();
  const geotiffLayerRef = useRef(null);

  useEffect(() => {
    const container = map;

    // Check if there is a previous GeoTIFF layer and remove it
    if (geotiffLayerRef.current) {
      container.removeLayer(geotiffLayerRef.current);
    }



    // Create and add the new GeoTIFF layer to the map
    const geotiffLayer = L.leafletGeotiff(url, options).addTo(map);
    geotiffLayerRef.current = geotiffLayer;
  }, [url, map]);

  return null;
};

export default RasterMap;
