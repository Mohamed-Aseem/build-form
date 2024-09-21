import React, { useState } from 'react'
import './EmailSideBar.css'
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ReactSwitch from 'react-switch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailSideBar({setEnableEmailEdit, mainData, setMainData}){

  const [tempData, setTempData] = useState(mainData);

  const handleText = (e)=>{
    const {name, value} = e.target;
    setMainData((prevData)=>({
      ...prevData,
      [name] : value
    }))
  }

  const handleSave = () =>{
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(mainData.required === true){
      if(mainData.email !== null && mainData.email !== ''){
        if(mailformat.test(mainData.email)){
          setTempData(mainData);
          setEnableEmailEdit(false)
        }else{
          toast.error("This is an invalid email!");
        }
      }else{
        toast.error("Please enter your email!");
      }
      
    }else{
      if(mainData.email === null || mainData.email === ''){
        setTempData(mainData);
        setEnableEmailEdit(false)
      }else{
        if(mailformat.test(mainData.email)){
          setTempData(mainData);
          setEnableEmailEdit(false)
        }else{
          toast.error("This is an invalid Email!");
        }
      }
    }
  }
  
  const handleCancle = () =>{
    setMainData(tempData);
    setEnableEmailEdit(false)
  }
  
  const handleClose = () =>{
    setMainData(tempData);
    setEnableEmailEdit(false);
  }

  const handleSwitch = () =>{
    if(mainData.required === false){
      setMainData((prevData)=>({
        ...prevData,
        required : true
      }))
    }else{
      setMainData((prevData)=>({
        ...prevData,
        required : false
      }))
    }
  }
  
  return (
    <div className='edit-main-container'>
        <div className='edit-main-container-header'>
            <div className="edit-main-container-header-left">
                <IoSettingsSharp />
                <p>Settings <span>( Email )</span></p>
            </div>
            <div className="edit-main-container-header-right" onClick={handleClose}>
                <IoMdClose />
            </div>
        </div>
        <div className="edit-main-container-contents">
          <div className='edit-main-container-contents-textbox-container'>
            <label>Title</label>
            <input type="text" name="title" value={mainData.title} onChange={handleText}/>
          </div>
          <div className='edit-main-container-contents-textbox-container'>
            <label>Description</label>
            <input type="text" name="description" value={mainData.description} onChange={handleText}/>
          </div>
          <div className='edit-main-container-contents-checkbox-container'>
            <label>Required</label>
            <ReactSwitch height={20} width={45} onChange={handleSwitch} checked={ mainData.required === true} />
          </div>
          <div className="side-bar-lower-btn-container">
            <button className='side-bar-lower-btn-container-black-bg' onClick={handleSave}>
              Save
            </button>
            <button className='side-bar-lower-btn-container-white-bg' onClick={handleCancle}>
              Discard
            </button>
          </div>

        </div>
        <ToastContainer 
                position="top-right"
                autoClose={3000}
                
            />
    </div>
  )
}

export default EmailSideBar;