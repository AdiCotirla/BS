import React from 'react'
import "../Styling/footer.css"
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
  } from "react-router-dom";
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='name-footer'>
            <h1>BLACK SCISSORS</h1>
        </div>
        <div className='info-footer'>
            <div className='socials'>
                <h1>SOCIAL NETWORKS</h1>
                <Link className='link-social underlined' to="https://www.instagram.com/p_b_a_hairstylist/">Instagram</Link>
                <Link className='link-social underlined' to="https://www.facebook.com/popa.bogdanandrei.9">Facebook</Link>
            </div>
            <div className='location'>
                <h1>LOCATION</h1>
                <p className="p-location">Strada Mioritei 1, <br/>
                    Cluj-Napoca 400000
                </p>
            </div>
            <div className='programare'>
                <h1>Appointment</h1>
                <p1 className="p-location">0745803464</p1>
                <Link className='link-social underlined' to="https://mero.ro/p/black-scissors">MERO</Link>
            </div>
            <p className='rights'>© 2020 - 2023 Black Scissors. All rights reserved.</p>
        </div>
    </div>
  )
}
