import React from 'react'
import './WellcomeScreen.css'
import { AiOutlineEnter } from "react-icons/ai";
import EmailMainPage from './EmailMainPage';

function WellcomeScreen({ welcomeData, enableEmailEdit, mainData, setMainData}) {
  return (
    <div className={`welcome-screen-container ${welcomeData.placement === "left" ? 'reverse' : ''}`}>
      <div className="welcome-screen-container-left">
        <div className="welcome-screen-container-left-flex">
          <h1 data-aos='fade-up' data-aos-duration='1000'>{welcomeData.title}</h1>
          <h2 data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500'>{welcomeData.description}</h2>
          <div className="welcome-screen-btn-conatiner" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
            <div className="welcome-screen-start-btn">{welcomeData.buttonContent}</div>
            <div className="welcome-screen-start-contents">
              <p>press <strong>Enter</strong></p>
              <AiOutlineEnter size={15}/>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-screen-container-right" data-aos='fade-up' data-aos-duration='1000'>
        <img src={welcomeData.image} alt="" />
      </div>

      <div className={`welcome-screen-email-edit-container ${enableEmailEdit ? 'edit-email-active': ''}`}>
        <EmailMainPage
          mainData={mainData}
          setMainData= {setMainData}
        />
      </div>
    </div>
  )
}

export default WellcomeScreen