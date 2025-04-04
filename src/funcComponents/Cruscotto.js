import React from 'react';
import './Cruscotto.css';
import PropTypes from 'prop-types';

function Cruscotto() {
    const exams = JSON.parse(localStorage.getItem("examList"));
    let totalVote = 0;
    let numExams = exams.length; 
    let passedExams = 0;
    let failedExams =  0;
    let honors = 0; 
    let averageVote = 0;
    //per ogni esame che viene inserito aggiorna il cruscotto 
    exams.map(exam => {
        //condizione ? valore_se_vera : valore_se_falsa
        //solo voti fino al 30 se, 31 contato come 30
        totalVote += parseInt(exam.examVote) === 31 ? 30 : parseInt(exam.examVote);
        honors += exam.examVote == 31 ? 1 : 0;
        failedExams += exam.examVote < 18 ? 1 : 0;
        passedExams += exam.examVote >18 ? 1 :0; 

    })
    averageVote = totalVote / numExams;
    let finalAverage = averageVote.toFixed(1);

    
  
    return (

        <div className="cruscotto">
            <div>
                <h3>Cruscotto</h3>
                <div className='text'>
                    <p>Media esami: {finalAverage} </p>
                    <p>Esami sostenuti: {numExams}</p>
                    <p>Numero esami superati: {passedExams} </p>
                    <p>Tentativi non superati: {failedExams} </p>
                    <p>Numero Lodi: {honors} </p>
                </div>
            </div>
        </div>
    );
}

export default Cruscotto;
