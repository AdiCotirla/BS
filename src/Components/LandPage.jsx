import React from 'react'
import logo from "../assets/logo.png"
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
            <img src={logo} alt='logo' className='landpage-logo'/>
        </div>
        <div className='land-meniu'>
            <div className='links-on'>
            <Link className='land-link' to="/Home">Home</Link>
            <Link className='land-link' to="/Gallery">Gallery</Link>
            <Link className='land-link' to="/Contact">Contact</Link>
            <Link className='land-link' to="/Appointment">Appointment</Link>
            </div>
        </div>
    </div>
  )
}
