import React, {useState} from 'react'
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";
import "../Styling/Navbar.css"
export default function Navbar() {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  React.useEffect(()=>{
    var NavPhone = document.getElementById("navbar-switch")
    if(deviceSize > 950)
    {
      NavPhone.classList.add("nav-on")
      NavPhone.classList.remove("nav-off")

    }
    else
    {
      NavPhone.classList.remove("nav-on")
      NavPhone.classList.add("nav-off")
    }
  })


  return (
    <div className='navbar-container' id='navbar-switch'>
        <div className='navbar-logo-container'>
            <Link className='navbar-logo-link' to="/">
            <img src={logo} className='navbar-logo' alt="logo" />
            </Link>
        </div>
        <div className='navbar-links-container'>
            <Link className='navbar-links' to="/Home">Home</Link>
            <Link className='navbar-links' to="/Gallery">Gallery</Link>
            <Link className='navbar-links' to="/Contact">Contact</Link>
            <Link className='navbar-links' to="/Appointment">Appointment</Link>
        </div>
    </div>
  )
}
