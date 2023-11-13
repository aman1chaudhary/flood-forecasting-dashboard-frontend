import React from 'react'
import InundationMap from './pages/InundationMap'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import About from './pages/AboutPage';
import TimeSeries from './pages/TimeSeries';
import AcknowledgementPage from './pages/AcknowledgementPage';
import TeamPage from './pages/TeamPage';
import FloodForecastingPage from './pages/FloodForecastingPage';
import { AlertProvider } from './contexts/AlertContext';
import { LoaderProvider } from './contexts/LoaderContext';
import AlertMessage from './components/AlertMessage';

const App = () => {
  return (
    <div className='dashboard_container'>
      <Router>
        <AlertProvider>
          <AlertMessage />
          <LoaderProvider>
            <Routes>
              <Route path="/" element={<InundationMap />} />
              <Route path="/about" element={<About />} />
              <Route path="/timeseries" element={<TimeSeries />} />
              <Route path="/acknowledgement" element={<AcknowledgementPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/flood-forecasting" element={<FloodForecastingPage />} />
            
            </Routes>
            <Footer />
          </LoaderProvider>
        </AlertProvider>


      </Router>
    </div>
  )
}

export default App