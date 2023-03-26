import React from 'react';
import './Cruscotto.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Cruscotto({ examList }) {

   /*  const [media, setMedia] = useState(0);
    const [esamiSostenuti, setEsamiSostenuti] = useState(0);
    const [esamiSuperati, setEsamiSuperati] = useState(0);
    const [numeroBocciature, setNumeroBocciature] = useState(0);
    const [numeroLodi, setNumeroLodi] = useState(0);

    useEffect(() => {
        if (Array.isArray(examList)) {
            let totalVote = 0;
            let totalExams = 0;
            let passedExams = 0;
            let failedExams = 0;
            let honors = 0;

            examList.forEach((exam) => {
                totalVote += exam.examVote;
                totalExams++;
                if (exam.examVote >= 18) {
                    passedExams++;
                    if (exam.examVote >= 30) {
                        honors++;
                    }
                } else {
                    failedExams++;
                }
            });

            setMedia(totalVote / totalExams || 0);
            setEsamiSostenuti(totalExams);
            setEsamiSuperati(passedExams);
            setNumeroBocciature(failedExams);
            setNumeroLodi(honors);
        }
    }, [examList]);
 */
    return (

        <div className="cruscotto">
            <div>
                <h3>Cruscotto</h3>
                <div className='text'>
                    <p>Media esami: </p>
                    <p>Esami sostenuti: </p>
                    <p>Numero esami superati: </p>
                    <p>Numero bocciature: </p>
                    <p>Numero Lodi: </p>
                </div>
            </div>
        </div>
    );
}

Cruscotto.propTypes = {
    examList: PropTypes.array.isRequired
};

export default Cruscotto;
