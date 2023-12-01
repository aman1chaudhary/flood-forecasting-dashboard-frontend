import React, { useState } from 'react'
import LeftPanel from '../components/LeftPanel'

const AboutPage = () => {


  return (
    <div>
      <div className='main_dashboard'>
        <div className='left_panel'>
          <LeftPanel />
        </div>
        <div className='right_panel'>


        <iframe style={{width:"100%", height:"100%"}} src="https://iitgnacin-my.sharepoint.com/personal/20110012_iitgn_ac_in/_layouts/15/embed.aspx?UniqueId=d51b68b1-5186-424c-b949-852e1dc0761a" frameborder="0" scrolling="no" allowfullscreen title="Flood_Forecasting_System.pdf"></iframe>



{/* 
          <div className='para_content'>
            <h2>About</h2>
            <h4>Introduction</h4>
            <p>
              Floods pose a significant global threat, causing thousands of deaths and extensive economic damage yearly. Population growth, urbanisation, and climate change are exacerbating this issue, especially in low-income countries. Accurate and timely flood extent prediction is crucial for effective disaster management and mitigation strategies. Operational flood warning systems are crucial for saving lives and reducing risks. These systems vary in structure and data sources but often employ real-time weather data and hydrological models. Evaluating these systems has been challenging but is essential for improvement. Recent machine learning (ML) advances have shown promise in streamflow and inundation modelling.</p><p>

              For this study, we use Long-Short Term Memory(LSTM) models for predicting the discharge for the basin. We use input parameters like precipitation, temperature, wind speed, and PET for predicting the discharge corresponding to these parameters.
              The thresholding model predicts flood extents based on river gauge measurements. The model leverages historical inundation data and river height measurements to forecast flood-prone areas, aiding in early warning systems and resource allocation during flood events. The Hoshangabad station was chosen for this study due to the availability of relevant data. Additionally, a comprehensive dashboard has been created to visualise inundation maps for specific dates and to predict inundation maps using the threshold model based on input gauge measurements.

            </p>
            <div className='row'>

              <div className='col-md-6'>

              </div>

              <div className='col-md-6'>
                <img src={MethodologyIMG} />
              </div>

            </div>



            <h4>DataSet</h4>
            <p>

            </p>

            <h4>References</h4>
            <p>
              <ol>
                <li>
                  Nevo, S., Morin, E., Gerzi Rosenthal, A., Metzger, A., Barshai, C., Weitzner, D., Voloshin, D., Kratzert, F., Elidan, G., Dror, G., Begelman, G., Nearing, G., Shalev, G., Noga, H., Shavitt, I., Yuklea, L., Royz, M., Giladi, N., Peled Levi, N., Reich, O., Gilon, O., Maor, R., Timnat, S., Shechter, T., Anisimov, V., Gigi, Y., Levin, Y., Moshe, Z., Ben-Haim, Z., Hassidim, A., and Matias, Y.: Flood forecasting with machine learning models in an operational framework, Hydrol. Earth Syst. Sci., 26, 4013–4032, https://doi.org/10.5194/hess-26-4013-2022 , 2022
                </li>

                <li>
                  Kratzert, Frederik, et al. “Rainfall–Runoff Modelling Using Long Short-Term Memory (LSTM) Networks.” Hydrology and Earth System Sciences, vol. 22, no. 11, 2018, pp. 6005–6022., https://doi.org/10.5194/hess-22-6005-2018.
                </li>
                <li>Flood Mapping and Damage Assessment Using Sentinel-1 SAR Data in Google Earth Engine
                  (https://www.un-spider.org/advisory-support/recommended-practices/recommended-p
                  ractice-google-earth-engine-flood-mapping/step-by-step )
                </li>
                <li>
                  Rating Curves For Gaugin Sites on Narmada River, Satish Chandra.
                  http://117.252.14.250:8080/jspui/bitstream/123456789/33/1/CS-6.pdf

                </li>

              </ol>

            </p>






          </div> */}

        </div>

      </div>
    </div>
  )
}

export default AboutPage