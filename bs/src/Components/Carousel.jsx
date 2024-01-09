
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import intro from "../assets/salon.jpg"
import "../Styling/Carousel.css"
export default class DemoCarousel extends Component {
    render() {
        return (
            <>
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
                    <img src={intro} className='img-carousel'/>
                </div>
            </Carousel>
            </>
        );
    }
};