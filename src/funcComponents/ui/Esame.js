import React from 'react';
import './Esame.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


function Esame(props) {
    const [esito, setEsito] = useState("");

  function funcEsito() {
    if (props.exam.examVote < 18 || props.exam.examVote <= 0) {
      setEsito("Bocciato");
    } else if (props.exam.examVote == 31) {
      setEsito("Superato con Lode");
    } else {
      setEsito("Superato");
    }
  }
  useEffect(() => {
    funcEsito();
  }, [props.exam.examVote]);
    return (
        <div className="exam">
            <div className='title' style={{ backgroundColor: esito === "Bocciato" ? "#c4302f" : "green" }}>
                <h4>{props.exam.examName}</h4>
            </div>
            <hr></hr>
            <div className='element'><p>Voto: {props.exam.examVote} </p></div>
            <div className='element'><p>Data: {props.exam.examDate}</p></div>
            <div  className='element'><p> {esito}</p></div>


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
