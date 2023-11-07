import React from 'react'
import LeftPanel from '../components/LeftPanel'

const AboutPage = () => {
  return (
    <div>
      <div className='main_dashboard'>
        <div className='left_panel'>
          <LeftPanel />
        </div>
        <div className='right_panel'>
          <div className='para_content'>
            <h2>About</h2>
            <p>
            The Hoshangabad Flood Alerts Dashboard is a crucial tool that plays a pivotal role in providing real-time information and alerts to the residents of Hoshangabad and the surrounding areas in India. Floods are a recurrent natural disaster in the region, and this dashboard has been designed to empower communities with the information they need to prepare for and respond to flood events effectively.

            </p>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default AboutPage