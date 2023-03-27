import React from 'react';
import './Cruscotto.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Cruscotto() {
    const exams = JSON.parse(localStorage.getItem("examList"));
    let totalVote = 0;
    let numExams = exams.length; 
    let passedExams = 0;
    let failedExams =  0;
    let honors = 0; 
    let averageVote = 0;
    exams.map(exam => {
        totalVote += parseInt(exam.examVote) === 31 ? 30 : parseInt(exam.examVote);
        honors += exam.examVote == 31 ? 1 : 0;
        failedExams += exam.examVote < 18 ? 1 : 0;
        passedExams += exam.examVote >18 ? 1 :0; 

    })
    
    averageVote = totalVote / numExams;
    
  
    return (

        <div className="cruscotto">
            <div>
                <h3>Cruscotto</h3>
                <div className='text'>
                    <p>Media esami: {averageVote} </p>
                    <p>Esami sostenuti: {numExams}</p>
                    <p>Numero esami superati: {passedExams} </p>
                    <p>Numero bocciature: {failedExams} </p>
                    <p>Numero Lodi: {honors} </p>
                </div>
            </div>
        </div>
    );
}

Cruscotto.propTypes = {
    examList: PropTypes.array.isRequired
};

export default Cruscotto;
