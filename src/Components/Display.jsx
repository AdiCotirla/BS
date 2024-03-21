/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { displayData } from '../Data/displayData'
import "../Styling/Display.css"
export default function Display() {
  return (
    <div className='item-container'>
        {displayData.map((item, id) => (
            <div className='item' key={id}>
                <a href={item.atu} className='atu'/>
                <img src={item.img} alt={item.name}  className='item-img'/>
               <div className='container-info'>
                     <p className='item-h2'>{item.name}</p>
                             <button className='button-display'>
                              <a href={item.atu} className='atu-btn'>WATCH</a>
                              </button>             
               </div>
            </div>
        ))}
    </div>
  )
}
