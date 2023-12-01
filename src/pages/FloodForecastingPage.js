import React, { useState } from 'react';
import axios from 'axios'; // Make sure you've installed axios
import LeftPanel from '../components/LeftPanel';
import { BACKEND_URL } from '../components/BackendURL';
import { useAlertContext } from '../contexts/AlertContext';
import { useLoaderContext } from '../contexts/LoaderContext';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import RasterMap from './RasterMap';


const FloodForecastingPage = () => {
  const { setAlertMessage, setShowAlert } = useAlertContext();
  const { setIsLoading } = useLoaderContext();
  const [gaugeMeasurement, setGaugeMeasurement] = useState("");
  const [predictedMapLink, setPredictedMapLink] = useState("");
  const [displayMaxValue, setDisplayMaxValue] = useState();


  const handleInputChange = (e) => {
    setGaugeMeasurement(e.target.value);
  };

  const sendDataToBackend = () => {
    if (gaugeMeasurement !== "") {
      setIsLoading(true)
      let dynamicDisplayMax;

      if (gaugeMeasurement >= 19) {
        dynamicDisplayMax = 1.6;
      } else if (gaugeMeasurement >= 11 && gaugeMeasurement < 19) {
        dynamicDisplayMax = 1.3;
      }else if (gaugeMeasurement >= 10 && gaugeMeasurement < 11) {
        dynamicDisplayMax = 1.001;
      } else {
        dynamicDisplayMax = 18;
      }
      setDisplayMaxValue(dynamicDisplayMax)

      axios.post(`${BACKEND_URL}/send_measurement`, { measurement: gaugeMeasurement })
        .then((response) => {
          // console.log(response)
          setAlertMessage(response.data.message)
          setPredictedMapLink(response.data.file_link)
          setShowAlert(true)
          setIsLoading(false)

          // Set the options with dynamicDisplayMax
          const options = {
            renderer: plottyRenderer,
            bounds: [[22.5444989120000017, 77.2885380120000036], [22.7877842760000000, 77.7441607800000014]],
            opacity: 0.8,
            displayMax: dynamicDisplayMax,
          };

        })
        .catch((error) => {
          setAlertMessage("An error occurred")
          setShowAlert(true)
          setIsLoading(false)
        });

    } else {
      setAlertMessage("Please Enter Gauge Measurement")
      setShowAlert(true)
    }

  };

  const layers = [
    {
      name: "Google Map",
      url: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    },
    {
      name: "Open Street Map",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ['a', 'b', 'c']
    },
    {
      name: "Topographic Map",
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      subdomains: ['a', 'b', 'c']
    },
    {
      name: "Satellite Map",
      url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }

  ]

  // Red:1.6
  // Yellow:1.001
  // Orange:1.3
  const plottyRenderer = L.LeafletGeotiff.plotty({
    // Optional. Minimum values to plot.
    displayMin: 0.1,
    // Optional. Maximum values to plot.
    displayMax: displayMaxValue,
    // Optional flag for plotty to enable/disable displayMin/Max.
    applyDisplayRange: true,
    // Optional. If true, values outside `displayMin` to `displayMax` will be rendered as if they were valid values.
    clampLow: true,
    clampHigh: true,
    // colorScale: "hot",
    colorScale: "plasma",
  });

  const options = {
    renderer: plottyRenderer,
    bounds: [[22.5444989120000017, 77.2885380120000036], [22.7877842760000000, 77.7441607800000014]],
    opacity: 0.8,
  };




  return (
    <div>
      <div className='main_dashboard'>
        <div className='left_panel'>
          <LeftPanel />
        </div>
        <div className='right_panel'>
          <div className='map_controler'>
            <input type='number' placeholder='Enter Gauge Measurement Value' value={gaugeMeasurement} onChange={handleInputChange} />
            <button onClick={sendDataToBackend}>Run Model</button>

          </div>

          <div className='legend_container'>
            {/* <p>Legend</p> */}
            <div className="legend-item">
              <i style={{ backgroundColor: 'red' }}></i>
              <p> Extreme Flood</p>
            </div>
            <div className="legend-item">
              <i style={{ backgroundColor: 'orange' }}></i>
              <p> Severe Flood</p>
            </div>
            <div className="legend-item">
              <i style={{ backgroundColor: 'yellow' }}></i>
              <p> Above Normal Flood</p>
            </div>


          </div>
          <MapContainer
            fullscreenControl={true}
            center={[22.66, 77.56]}
            zoom={12}
            style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
            scrollWheelZoom={true} minZoom={5}
          >
            <LayersControl position="topright" collapsed={true}>
              {layers.map((layer, index) => {
                return (
                  <LayersControl.BaseLayer
                    key={index}
                    checked={index === 0 ? true : false}
                    name={layer.name}
                  >
                    <TileLayer
                      // attribution={layer.attribution}
                      url={layer.url}
                      subdomains={layer.subdomains}
                    />
                  </LayersControl.BaseLayer>
                )
              })}
            </LayersControl>


            {predictedMapLink && (
              <RasterMap url={predictedMapLink} options={options} />

            )}

            {/* <RasterMap url="https://res.cloudinary.com/dbttirsjj/image/upload/v1699253606/nugw3sqbyagksaymaivj.tiff" options={options} /> */}






          </MapContainer>


        </div>
      </div>



    </div>
  );
};

export default FloodForecastingPage;
