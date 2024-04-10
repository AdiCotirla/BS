
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import intro from "../assets/salon.jpg"
import intro2 from "../assets/salon2.jpg"
import "../Styling/Carousel.css"
export default class DemoCarousel extends Component {
    render() {
        return (
            <div className='container-slider'>
            <Carousel className='main-slider' 
             swipeable={false}
             showThumbs={false}
             showStatus={false}
             autoPlay ={"stopOnHover"}
             infiniteLoop>
                <div className='carousel-container'>
                    <img src={intro} className='img-carousel'/>
                </div>
                <div className='carousel-container'>
                    <img src={intro2} className='img-carousel'/>
                </div>
            </Carousel>
            <span className='overlay-span'></span>
            <span className='span right'></span>
            <span className='span left'></span>
            </div>
        );
    }
};