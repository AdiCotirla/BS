import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
  } from "react-router-dom";
  import "../Styling/ServiceFound.css"
export default function ServiceFound(props) {
   
        return (<div className='stores-filtered-container'>
            {props.array.map((service, id) => {
                return (
                    <div className={
                    props.gender === service.gender  || 
                    props.gender === service.gender2 ||
                    props.show === service.show ? "store active" : "store inactive"} key={id}>
                        <div className='store-big-container'>
                            <div className='container-head'>
                                <h1>BLACK SCISSORS</h1>
                            </div>
                            <div className='container-informatii'>
                                <div className='upper-info'>
                                    <h1 className='header-upper'>{service.name}</h1>
                                    <p className='price-durata'>{service.durata}{service.price}</p>
                                </div>
                                <div className='lower-info'>
                                    <p className='service-description'>{service.description}</p>
                                    <a href={service.to} className="cta book-nowbutton">
                                            <span>BOOK NOW</span>
                                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                             </svg>
                                    </a>
                                </div>
                            </div>
                        <p className='rights-service'>© 2020 - 2023 Black Scissors. All rights reserved.</p>
                        </div>
                    </div>
                )
            })}
        </div>
        )
}
