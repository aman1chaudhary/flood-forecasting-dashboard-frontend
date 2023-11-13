import React, { useState } from 'react';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import LeftPanel from '../components/LeftPanel';
import InundationMapsData from '../data/InundationMapsData.json';
import RasterMap from './RasterMap';



const InundationMap = () => {
    const [selectedDate, setSelectedDate] = useState('2012-08-06');
    const [selectedData, setSelectedData] = useState(InundationMapsData.find(data => formatDate(data.Date) === selectedDate));

    const handleDateChange = (event) => {
        const newSelectedDate = event.target.value;

        console.log(newSelectedDate)

        // Check if the selected date is present in InundationMapsData
        const newData = InundationMapsData.find(data => formatDate(data.Date) === newSelectedDate);

        if (newData) {
            setSelectedDate(newSelectedDate);
            setSelectedData(newData);
        } else {
            // Date not found in data, show alert message
            alert('Selected date not found in data.');
        }
    };

    function formatDate(date) {
        // Convert the selected date to the JSON format ("01/06/12" to "2012-08-31")
        const parts = date.split('/');
        const year = parts[2];
        const month = parts[1];
        const day = parts[0];
        return `20${year}-${month}-${day}`;
    }

    const plottyRenderer = L.LeafletGeotiff.plotty({
        // Optional. Minimum values to plot.
        displayMin: 0.1,
        // Optional. Maximum values to plot.
        displayMax: 20,
        // Optional flag for plotty to enable/disable displayMin/Max.
        applyDisplayRange: true,
        // Optional. If true, values outside `displayMin` to `displayMax` will be rendered as if they were valid values.
        clampLow: true,
        clampHigh: true,
        // colorScale: "hot",
        colorScale: "viridis",
    });

    const options = {
        renderer: plottyRenderer,
        bounds: [[22.5444989120000017, 77.2885380120000036], [22.7877842760000000, 77.7441607800000014]],
        opacity: 0.8,
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


    return (
        <>
            <div className='main_dashboard'>
                <div className='left_panel'>
                    <LeftPanel />
                </div>
                <div className='right_panel'>
                    <div className='map_controler'>
                        <div>
                        <label>Select District: </label>
                            <select id="cars" name="cars">
                                <option value="Hoshangabad">Hoshangabad</option>
                            </select><br/>
                            <label>Select Date: </label>
                            <input type="date" value={selectedDate} min="2012-06-01" max="2012-10-31" onChange={handleDateChange} />
                            {selectedData && (
                                <div>
                                    Mean Gauge(m): {selectedData.Mean_Gauge}<br />
                                    Discharge(cumecs): {selectedData.Discharge}<br />
                                </div>

                            )}
                        </div>

                    </div>

                    <MapContainer
                        fullscreenControl={true}
                        center={[22.66, 77.56]}
                        zoom={12}
                        style={{ width: '100%', height: "100%", backgroundColor: 'white', border: 'none', margin: 'auto' }}
                        scrollWheelZoom={true} minZoom={5}
                    >
                        {/* <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        /> */}

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


                        {selectedData && (
                            <RasterMap url={selectedData.ImageURL} options={options} />

                        )}

                    </MapContainer>


                </div>
            </div>
        </>
    );
}

export default InundationMap;
