import React from 'react'
import { Link } from 'react-router-dom'

const LeftPanel = () => {
    return (
        <div className='side_navbar'>
            <Link to="/">
                <div className='side_navbar_item'>
                    Inundation Maps
                </div>
            </Link>

            <Link to="/timeseries">
                <div className='side_navbar_item'>
                    Time Series 
                </div>
            </Link>
            <Link to="/flood-forecasting">
                <div className='side_navbar_item'>
                Flood forecasting
                </div>
            </Link>
        </div>
    )
}

export default LeftPanel