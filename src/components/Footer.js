import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_menu'>
                {/* <Link to="/about">
                    <div className='footer_item'>
                        About
                    </div>
                </Link> */}

                <Link to="/acknowledgement">
                    <div className='footer_item'>
                    Acknowledgement
                    </div>
                </Link>

                <Link to="/team">
                    <div className='footer_item'>
                    Team
                    </div>
                </Link>

                
            </div>
        </div>
    )
}

export default Footer