import React from 'react';
import './Esame.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from './Button';



function Esame(props) {
  //setto una variabile esito che ha come stato iniziale ""
  const [esito, setEsito] = useState("");

  function funcEsito() {
    //in base alle condizioni avrà un valore diverso
    if (props.exam.examVote < 18 || props.exam.examVote <= 0) {
      setEsito("Bocciato");
    } else if (props.exam.examVote == 31) {
      setEsito("Superato con Lode");
    } else {
      setEsito("Superato");
    }
  }
  //useEffect per eseguire la funzione ogni volta che la proprietà di voto esame cambia
  useEffect(() => {
    funcEsito();
  }, [props.exam.examVote]);

  //eliminare componente esame stampato a video
  function handleDelete() {
    //esegue la funzione onDelete in base alla posizione nell'array del componente esame 
    props.onDelete(props.index);
  }
  return (
    <div className="exam">
      {/* se l'esame ha esito bocciato il bg è rosso se no verde */}
      <div className='title' style={{ backgroundColor: esito === "Bocciato" ? "#c4302f" : "green" }}>
        <h4>{props.exam.examName}</h4>
      </div>
      <hr></hr>
      <div className='element'><p>Voto: {props.exam.examVote} </p></div>
      <div className='element'><p>Data: {props.exam.examDate}</p></div>
      <div className='element'><p> {esito}</p></div>
      <div className='element'>
        <Button
          label={'Cancella'}
          classCss={'deleteButton'}
          callbackButton={handleDelete}
        />
      </div>

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
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}


export default Esame
