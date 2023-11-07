import React from 'react'
import LeftPanel from '../components/LeftPanel'

const AcknowledgementPage = () => {
    return (
        <div>
            <div className='main_dashboard'>
                <div className='left_panel'>
                    <LeftPanel />
                </div>
                <div className='right_panel'>
                    <div className='para_content'>
                        <h2>Acknowledgement</h2>
                        <p>
                            We would like to extend our sincere appreciation to India's Water Resource Information System (WRIS) and Bhuvan for their invaluable contribution of gauge measurement data and DEM data respectively. This data has played a crucial role in the development of our project.



                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AcknowledgementPage