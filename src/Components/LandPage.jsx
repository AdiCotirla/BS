import React from 'react'
import logo from "../assets/logo.png"
import introPc from "../assets/intro.mp4"
import introPhone from "../assets/s.mp4"

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";
import "../Styling/LandPage.css"
export default function LandPage() {
  return (
    <div className='landpage-container'>
      <div className="video-container">
      <video autoPlay loop muted controls={false}  webkit-playsinline playsInline className='pc'  >
       <source src={introPc} type="video/mp4" />
      </video>
      <video autoPlay loop muted controls={false}   webkit-playsinline playsInline className='phone'  >
       <source src={introPhone} type="video/mp4" />
      </video>
</div>
        <div className='land-meniu'>
            <div className='links-on'>
            <Link className='land-link inter' to="/BS/Home">Home</Link>
            <Link className='land-link inter' to="/BS/Gallery">Gallery</Link>
            <Link className='land-link inter' to="/BS/Contact">Contact</Link>
            <Link className='land-link inter' to="/BS/Appointment">Appointment</Link>
            </div>
        </div>
    </div>
  )
}
