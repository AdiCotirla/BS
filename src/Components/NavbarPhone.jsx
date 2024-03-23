import React, { useState } from 'react';
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "../Styling/Navbar.css"
export default function NavbarPhone() {
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const [click, setClick] = useState(false)

    React.useEffect(()=>{
        var NavPhone = document.getElementById("phone-navbar-switch")
        if(deviceSize < 950)
        {
          NavPhone.classList.add("phone-on")
          NavPhone.classList.remove("phone-off")

        }
        else
        {
          NavPhone.classList.remove("phone-on")
          NavPhone.classList.add("phone-off")
        }
      })
  return (
    <div className='navbar-master' id='phone-navbar-switch'>
    <div className='navbar-phone'>
    <div className='logo-container'>
        <Link className='navbar-logo-link' to="/BS">
         <img src={logo} className='logo-navphone' alt='logo'/>
          </Link>
        
    </div>
            <div className='icon-open'>
                 <button className={ click ? "menu-button active" : 'menu-button'} onClick={()=>{setClick(!click)}}>
                    <div className={ click ? "arrow-menu off" : 'arrow-menu'} ></div>
                 </button>
            </div>
    <div className={ click ? "navbar-menu enable" : "navbar-menu disable"}>
        <Link className='link-navphone' to="/BS/Home" onClick={()=>{setClick(!click)}}>Home</Link>
        <Link className='link-navphone'to="/BS/Gallery" onClick={()=>{setClick(!click)}}>Gallery</Link>
        <Link className='link-navphone'to="/BS/Contact" onClick={()=>{setClick(!click)}}>Contact</Link>
        <Link className='link-navphone'to="/BS/Appointment" onClick={()=>{setClick(!click)}}>Appointment</Link>
    </div>
    </div>
    </div>
  )
}
