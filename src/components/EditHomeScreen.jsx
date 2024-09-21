import React, { useState } from 'react'
import './EditHomeScreen.css'
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxTextAlignLeft } from "react-icons/rx";
import { RxTextAlignRight } from "react-icons/rx";
import { BsFillFileImageFill } from "react-icons/bs";

export const EditHomeScreen = ({welcomeData, setWelcomeData,setEnableHomeEdit}) => {

  const [tempData, setTempData] = useState(welcomeData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWelcomeData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const handleSaveData = ()=>{
    setTempData(welcomeData);
    setEnableHomeEdit(false);
  }

  const handleOldData = ()=>{
    setWelcomeData(tempData);
    setEnableHomeEdit(false);
  }

  const handlePlacement = (type)=>{
    setWelcomeData((prevData) => ({
      ...prevData,
      placement: type,
    }));
  }

  const handleImageRemove = ()=>{
    setWelcomeData((prevData)=>({
      ...prevData,
      image: undefined
    }));
  }


  return (
    <div className='edit-home-screen-container'>
        <div className='edit-home-screen-container-header'>
            <div className="edit-home-screen-container-header-left">
                <IoSettingsSharp />
                <p>Settings</p>
            </div>
            <div className="edit-home-screen-container-header-right" onClick={handleSaveData}>
                <IoMdClose />
            </div>
        </div>
        <div className="edit-home-screen-container-contents">
          <div className='edit-home-screen-container-contents-textbox-container'>
            <label>Title</label>
            <input type="text" name="title" value={welcomeData.title} onChange={handleInputChange}/>
          </div>
          <div className='edit-home-screen-container-contents-textbox-container'>
            <label>Description</label>
            <input type="text" name="description" value={welcomeData.description} onChange={handleInputChange}/>
          </div>
          <div className='edit-home-screen-container-contents-textbox-container'>
            <label>Button Text</label>
            <input type="text" name="buttonContent" value={welcomeData.buttonContent} onChange={handleInputChange} />
          </div>
          <input 
            type="file" 
            accept='image/' 
            id='uploadBtn'
            onChange={(e)=>{
              const file = e.target.files?.[0];
              setWelcomeData((prevData)=>({
                ...prevData,
                image: ( file? URL.createObjectURL(file): welcomeData.image)
              }));
            }}
          
          
          />
          <label htmlFor="uploadBtn" className='edit-home-screen-container-contents-upload-btn'><MdOutlineFileUpload size={14}/>Upload</label>

          <div className='edit-home-screen-container-contents-image-container'>
            <img src={welcomeData.image} alt="" />
          </div>
          <div className='edit-home-screen-container-contents-image-tools'>
            <div className="edit-home-screen-container-contents-image-tools-remove" onClick={handleImageRemove}>
              Remove Image
            </div>
            <div className="edit-home-screen-container-contents-image-tools-placement">
              <p>Placement</p>
              <div className="edit-home-screen-container-contents-image-tools-placement-right" onClick={()=>handlePlacement("right")}>
                <RxTextAlignRight/>
                <BsFillFileImageFill/>
              </div>
              <div className="edit-home-screen-container-contents-image-tools-placement-right" onClick={()=>handlePlacement("left")}>
                <BsFillFileImageFill />
                <RxTextAlignLeft />
              </div>
            </div>
          </div>

          <div className="side-bar-lower-btn-container">
            <button className='side-bar-lower-btn-container-black-bg' onClick={handleSaveData}>
              Save
            </button>
            <button className='side-bar-lower-btn-container-white-bg' onClick={handleOldData}>
              Discard
            </button>
          </div>

        </div>
    </div>
  )
}
