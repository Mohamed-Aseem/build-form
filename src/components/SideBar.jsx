import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { FaCloud } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { IoIosCube } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { EditHomeScreen } from './EditHomeScreen';
import { RiDraggable } from "react-icons/ri";
import EmailSideBar from './EmailSideBar'

import AOS from 'aos';
import 'aos/dist/aos.css';


function SideBar({welcomeData, setWelcomeData,enableEmailEdit, setEnableEmailEdit,mainData, setMainData}) {

  const [enableHomeEdit, setEnableHomeEdit] = useState(false);


  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className='side-bar-container'>
      <div className='side-bar-upper-container'>
        <div className="side-bar-uper-container-1">
          <div className="side-bar-upper-container-1-top">
            <div className="side-bar-upper-container-1-top-left">
              <div className='side-bar-upper-container-1-top-left-1'><IoIosCube size={12}/> <p>Dashboard</p></div>
              <div className='side-bar-upper-container-1-top-left-2'><FaAngleRight size={12}/></div>
              <p>Demo</p>
            </div>
            <div className="side-bar-upper-container-1-top-right">
              <IoMdSettings />
            </div>
          </div>
          <div className="side-bar-upper-container-1-bottom">
            <div className="active">Content</div>
            <div>Design</div>
            <div>Share</div>
            <div>Replies</div>
          </div>
        </div>
        <div className="side-bar-uper-container-2">
          <div className="side-bar-uper-container-2-header">
            <MdFilterList />
            <p>Steps</p>
          </div>
          <p>The steps users will take to complete the form</p>
          <div className='side-bar-uper-container-2-btn' onClick={()=>setEnableHomeEdit(true)}>
            <FaDotCircle size={10}/>
            <p>Welcome screen</p>
          </div>
          <div className='side-bar-uper-container-2-btn' onClick={()=>setEnableEmailEdit(true)}>
            <RiDraggable size={14}/>
            <p>Enter your email</p>
          </div>
          <div className='side-bar-uper-container-2-add-btn'>
            <FaPlus size={9}/><p>Add field</p>
          </div>
          <div className='underline'></div>
          <div className='side-bar-uper-container-2-btn'>
            <FaDotCircle size={10}/>
            <p>End screen</p>
          </div>
        </div>
      </div>
      <div className="side-bar-lower-container">
        <div className="side-bar-lower-btn-container">
          <button className='side-bar-lower-btn-container-black-bg'>
            <FaCloud />
            Save & Publish
          </button>
          <button className='side-bar-lower-btn-container-white-bg'>
            <FiTrash2 />
            Delete
          </button>
        </div>
      </div>

      <div 
        className={`side-bar-edit-container ${enableHomeEdit ? 'edit-homescreen-active': ''}`}
      >
        <EditHomeScreen
          setEnableHomeEdit={setEnableHomeEdit}
          welcomeData={welcomeData}
          setWelcomeData={setWelcomeData}
        />
      </div>

      <div 
        className={`side-bar-edit-container ${enableEmailEdit ? 'edit-field-active': ''}`}
      >
        <EmailSideBar
          setEnableEmailEdit={setEnableEmailEdit}
          mainData={mainData}
          setMainData= {setMainData}
        />
      </div>
    </div>
  )
}

export default SideBar