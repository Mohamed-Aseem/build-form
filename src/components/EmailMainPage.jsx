import React from 'react'
import './EmailMainPage.css'
import { FaArrowRight } from "react-icons/fa";

const EmailMainPage = ({mainData, setMainData}) => {

  const handleText = (e)=>{
    const {name, value} = e.target;
    setMainData((prevData)=>({
      ...prevData,
      [name] : value
    }))
  }


  return (
    <div className='email-main-page-container'>
      <div className='email-main-page-contents-container'>
        <div className="email-main-page-contents-01">
          {mainData.id}
        </div>
        <div className="email-main-page-contents-02">
          <FaArrowRight size={14}/>
        </div>
        <div className="email-main-page-contents-03">
          <input type='text' className='email-main-page-contents-03-input-01' placeholder='Add question title' name="title" value={mainData.title} onChange={handleText}/>
          <input type='text' className='email-main-page-contents-03-input-02' placeholder='Add question description (optional)' name="description" value={mainData.description} onChange={handleText}/>
          <input type="email" className='email-main-page-contents-03-input-03' placeholder='Type here...' name="email" value={mainData.email} onChange={handleText}/>
        </div>
      </div>
    </div>
  )
}

export default EmailMainPage