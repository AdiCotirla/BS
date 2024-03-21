import React from 'react'
import logo from "../assets/logo.png"
import intro from "../assets/intro.jpg"
import "../Styling/Intro.css"
export default function Intro() {
  return (
    <div className='intro-all'>
    <div className='intro-container'>
        <div className='image-holder'>
            <img src={intro} alt='salon' className='salon-img'></img>
        </div>
        <div className='info-holder'>
            <div className='info-logo'>
            <img src={logo} alt='logo' className='intro-logo'></img>
            </div>
            <div className='info-para'>
                <p className='paragraf'>Contrary to popular belief, Lorem Ipsum is not simply 
                random text. It has roots in 
                a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Richard McClintock,
                <br/>
                <br/>
                looked up one of the more obscure Latin words, consectetur, from a Lorem 
                Ipsum passage, and going through the cites of the word in classical literature.</p>
            </div>
        </div>
    </div>
    <div className='story'>
        <h1 className='inter'>WE CUT OUR STORY</h1>
    </div>
    </div>
  )
}
