import React, { Component } from 'react';
import { useState } from "react";
import "../Styling/Questions.css"
import { GrAdd } from "react-icons/gr";


function FrecventQuestions(props) {
    const [expanded, setExpanded] = useState(false);
    const {questionsInformation } = props;
    return (
        <div className='question-master-container'>
      <div className="question-container">
        <p className='question'>{questionsInformation.question }</p>
        <span className="showMore" onClick={() => setExpanded(!expanded)}>
          <GrAdd className='icon'/>
        </span>
        </div>
        <div>
        {expanded ? (
          <div className="answer-container">
            <p className='answer'>{questionsInformation.answer}</p>
          </div>
        ) : null}
        </div> 
      </div>
    );
  }
  

export default FrecventQuestions