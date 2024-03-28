import React from 'react'
import logo from "../assets/logo.png"
import intro from "../assets/intro.mp4"
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
        <div className='logo-container-land'>
            <video autoPlay muted loop className='video'>
              <source src= {intro} type='video/mp4'  className='sursa'/>
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
