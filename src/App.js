import React, { useState, useEffect } from 'react'
import './App.css';
import SideBar from './components/SideBar'
import WellcomeScreen from './components/WellcomeScreen';
import image from './assets/img1.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    AOS.init({
      easing: 'ease',
    });
  },[])

  const [enableEmailEdit, setEnableEmailEdit] = useState(false);

  const [welcomeData, setWelcomeData] = useState({
      title :"Welcome to our form",
      description:"This is a description of the form",
      buttonContent:"Start",
      placement:"right",
      image:image
  })

  const [mainData, setMainData] = useState({
    id:0,
    title: '',
    description: '',
    email:'ima7str@gmail.com',
    required: false
  })

  return (
    <div className="app-container">
      <div className='app-conatiner-left-container'> 
        <SideBar 
          welcomeData={welcomeData}
          setWelcomeData={setWelcomeData}
          enableEmailEdit={enableEmailEdit}
          setEnableEmailEdit = {setEnableEmailEdit}
          mainData={mainData}
          setMainData= {setMainData}
        />
      </div>
      <div className='app-conatiner-right-container'> 
        <div className='app-conatiner-right'>
          <WellcomeScreen 
            welcomeData={welcomeData}
            enableEmailEdit={enableEmailEdit}
            mainData={mainData}
            setMainData= {setMainData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
