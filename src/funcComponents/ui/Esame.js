import React from 'react';
import './Esame.css';
import PropTypes from 'prop-types';


function Esame(props) {
    function esito() {
        if (document.getElementById("esito")) {
            if (props.exam.examVote < 18 || props.exam.examVote <= 0) {
                document.getElementById("esito").innerHTML = "Bocciato"
            } else if (props.exam.examVote == 31) {
                document.getElementById("esito").innerHTML = "Superato con Lode"
            } else {
                document.getElementById("esito").innerHTML = "Superato"
            }
        }
    }
    return (
        <div className="exam">
            <div className='title'>
                <h4>{props.exam.examName}</h4>
            </div>
            <hr></hr>
            <div className='element'><p>Voto: {props.exam.examVote} </p></div>
            <div className='element'><p>Data: {props.exam.examDate}</p></div>
            <div id="esito" className='element'><p> {esito()}</p></div>


        </div>
    );
};
Esame.defaultProps = {
    exam: {
        examName: "",
        examVote: 0,
        examDate: ""
    }
};

Esame.propTypes = {
    exam: PropTypes.shape({
        examName: PropTypes.string.isRequired,
        examVote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        examDate: PropTypes.string.isRequired
    }).isRequired
}


export default Esame
