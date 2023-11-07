import React, { useEffect, useState } from 'react'
import LeftPanel from '../components/LeftPanel'
import Plot from 'react-plotly.js';
import timeSeriesData from "../data/Input_parameters_dataset.json"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TimeSeries = () => {


    return (
        <div>
            <div className='main_dashboard'>
                <div className='left_panel'>
                    <LeftPanel />
                </div>
                <div className='right_panel'>


                    <Tabs>
                        <TabList>
                            <Tab>Mean Gauge Measurement</Tab>
                            <Tab>Precipitation</Tab>
                            <Tab>Temperature</Tab>
                            <Tab>Wind Speed</Tab>
                            <Tab>Discharge</Tab>
                            <Tab>Potential Evapotranspiration (PET) </Tab>
                            
                            
                        </TabList>

                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item.Mean_Gauge),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Mean Gauge',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily Mean Gauge Measurements',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'Mean Gauge' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>
                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item.pptn),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Mean Gauge',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily Precipitation',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'Precipitation' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>
                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item["temp(min)"]),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Temp Min',
                                        },
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item["temp(max)"]),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Temp Max',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily Temperature',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'Temperature' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>

                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item.wind),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Mean Gauge',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily Wind Speed',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'Wind Speed' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>

                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item.Discharge),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Mean Gauge',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily Discharge',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'Discharge' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>

                        <TabPanel>
                            {timeSeriesData.length > 0 && (
                                <Plot
                                    data={[
                                        {
                                            x: timeSeriesData.map((item) => item.Date),
                                            y: timeSeriesData.map((item) => item.PET),
                                            type: 'scatter',
                                            mode: 'lines',
                                            name: 'Mean Gauge',
                                        },
                                    ]}
                                    layout={{
                                        title: 'Hoshangabad Daily PET',
                                        xaxis: { title: 'Date' },
                                        yaxis: { title: 'PET' },
                                    }}
                                    style={{ width: '100%', height: "100%" }}
                                />
                            )}
                        </TabPanel>
                    </Tabs>




                </div>

            </div>
        </div>
    )
}

export default TimeSeries