import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const LeftPanel = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <>
            <div className='navbar_container'>
                <div className='navbar_heading' onClick={handleLinkClick}>
                <h1> Flood Alerts Dashboard </h1>
                </div>
                

                <div className="navbar__toggle" onClick={handleToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>


            <div className={`side_navbar ${showMenu ? 'show' : ''}`}>
                <Link to="/">
                    <div className='side_navbar_item' onClick={handleLinkClick}>
                        Inundation Maps
                    </div>
                </Link>

                <Link to="/timeseries">
                    <div className='side_navbar_item' onClick={handleLinkClick}>
                        Time Series
                    </div>
                </Link>
                <Link to="/flood-forecasting">
                    <div className='side_navbar_item' onClick={handleLinkClick}>
                        Flood forecasting
                    </div>
                </Link>
            </div>
        </>
    )
}

export default LeftPanel