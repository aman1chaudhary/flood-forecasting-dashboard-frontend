import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
                    <h1> Flood Forecasting Dashboard  </h1>
                </div>


                <div className="navbar__toggle" onClick={handleToggle}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
            </div>


            <div className={`side_navbar ${showMenu ? 'show' : ''}`}>

                <div onClick={handleLinkClick} className='side_navbar_item'>
                    <NavLink to="/"
                        className={({ isActive }) => (isActive ? 'active_navbar_link' : 'navbar_item_link')}>
                        Inundation Maps
                    </NavLink>
                </div>

                <div onClick={handleLinkClick} className='side_navbar_item'>
                    <NavLink to="/timeseries"
                        className={({ isActive }) => (isActive ? 'active_navbar_link' : 'navbar_item_link')}>
                       Time Series
                    </NavLink>
                </div>

                <div onClick={handleLinkClick} className='side_navbar_item'>
                    <NavLink to="/flood-forecasting"
                        className={({ isActive }) => (isActive ? 'active_navbar_link' : 'navbar_item_link')}>
                        Flood forecasting
                    </NavLink>
                </div>

                <div onClick={handleLinkClick} className='side_navbar_item'>
                    <NavLink to="/about"
                        className={({ isActive }) => (isActive ? 'active_navbar_link' : 'navbar_item_link')}>
                        About
                    </NavLink>
                </div>


                
            </div>
        </>
    )
}

export default LeftPanel