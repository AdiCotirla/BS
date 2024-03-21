import * as VscIcons from "react-icons/vsc"
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "../Styling/Location.css"
import FrecventQuestions from './Questions';
import { QuestionData } from '../Data/QuestionsData';

export default function Location() {
 
  const QuestionArray = [...QuestionData]
  return (
    
    <div className='location-master-container'>
      <div className='location-container'>
        <div className='find-container'><h1 className='find-header inter'>FIND US</h1></div>
        <div className='container-info-map'>
          <div className='location-info'>
            <h1 className='location-links'>Locatie</h1>
            <Link className='location-links' to="https://www.google.com/maps/place/Black+Scissors+Hair+Studio/@46.7653176,23.569927,17z/data=!3m1!4b1!4m6!3m5!1s0x47490fd91adac509:0x5ce2114be91ade5f!8m2!3d46.765314!4d23.5725019!16s%2Fg%2F11j6571vyq?entry=ttu">
              Strada Mioritei 1 <br />
              Etaj 1<br/>
              Cluj-Napoca 400000 
            </Link>
            <Link className='location-links' to="https://www.instagram.com/p_b_a_hairstylist/">Instagram </Link>
            <Link className='location-links' to= "https://www.facebook.com/profile.php?id=100063511479287">Facebook</Link>
            <a className='location-links' href="tel:0745803464">0745803464</a>

          </div>
          <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9786319923087!2d23.569926976778184!3d46.76531764569206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490fd91adac509%3A0x5ce2114be91ade5f!2sBlack%20Scissors%20Hair%20Studio!5e0!3m2!1sen!2sro!4v1704803772812!5m2!1sen!2sro"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className='map'
            /></div>
        </div>
      </div>
      <h1 className='header-questions inter'>Frequent Questions</h1>
      {QuestionArray.map((information) => {
        return (<FrecventQuestions questionsInformation={information} key={information.id} />)
      })}
    
    </div>
  )
}
