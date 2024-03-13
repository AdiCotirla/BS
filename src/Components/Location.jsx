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
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8915d545-15fa-4648-8fe8-b1f973b65ad9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your feedback!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  window.onload = () => {
    const mouseOnlyNumberInputField = document.getElementById("star");
    mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
      event.preventDefault();
    });
  }

  const QuestionArray = [...QuestionData]
  return (
    <div className='location-master-container'>
      <div className='location-container'>
        <div className='find-container'><h1 className='find-header'>FIND US</h1></div>
        <div className='container-info-map'>
          <div className='location-info'>
            <Link className='location-links'>Locatie</Link>
            <Link className='location-links'>
              Strada Mioritei 1 <br />
              Cluj-Napoca 400000
            </Link>
            <Link className='location-links'>Instagram </Link>
            <Link className='location-links'>Facebook</Link>
            <Link className='location-links'>0745803464</Link>

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

      <div className="container-form">
      <p className='subs-info'>Give us your honest opinion below </p>
      <form onSubmit={onSubmit} className="form">
      <input type="text" name="Recenzie" required className='text-area' placeholder='Quick feedback' />
          <input type="number" id="star" className="stars-area" name="stele" step="0.5" placeholder="Stars" min="0.5" max="5" />
          <button type="submit" className='button-submit'>
            <a href="" className="cta submit">
              <span>SEND Review</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </button>
      </form>
      <span>{result}</span>

    </div>

      <h1 className='header-questions'>Frequent Questions</h1>
      {QuestionArray.map((information) => {
        return (<FrecventQuestions questionsInformation={information} key={information.id} />)
      })}
    </div>
  )
}
