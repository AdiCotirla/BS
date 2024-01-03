import React from 'react'
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";
import "../Styling/Navbar.css"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
            <Link className='navbar-logo-link' to="/">
            <img src={logo} className='navbar-logo' alt="logo" />
            </Link>
        </div>
        <div className='navbar-links-container'>
            <Link className='navbar-links'>Home</Link>
            <Link className='navbar-links'>Gallery</Link>
            <Link className='navbar-links'>Contact</Link>
            <Link className='navbar-links'>Appointment</Link>
        </div>
    </div>
  )
}
