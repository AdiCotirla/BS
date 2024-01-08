import React from 'react'
import { SpecialistsData } from '../Data/SpecialistsData'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";
  import "../Styling/Specialist.css"
export default function Specialist() {
  return (
    <div className='specialist-container'>
        <h1 className='header-specialist'>Specialists</h1>
        {SpecialistsData.map((specialist, index) => {
            return(
                <div key={index} className='specialist-master'>
                    <div className='special-img-holder'>
                        <img src={specialist.img} alt="stilist" className='specialist-imagine'/>
                        <p className='p-img'>{specialist.nume}</p>
                        <p className='p-img'>{specialist.specializare}</p>
                        <div className='background'/>
                    </div>
                    <div className='specialist-info-holder'>
                        <p className='special-info'>{specialist.descriere}</p>
                        <a href="#" class="cta">
                        <span>BOOK NOW</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                         </svg>
</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
