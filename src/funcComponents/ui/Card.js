import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Button from './Button';
import InputBox from './InputBox';

function Card(props) {
    /* const handleSubmit = (event) => {
        event.preventDefault(); // previene il comportamento predefinito del browser
        props.functionButton(); // esegue la funzione passata come prop
      } */
    return (

        <form className="card" /* onSubmit={handleSubmit} */>
            <div>
                <h3>{props.label}</h3><br></br>
                <div className='inputContainer'>
                    <InputBox
                        inputType={'text'}
                        inputPlaceholder={"inserisci il nome esame"}
                        inputMaxLength={99}
                        callbackInput={props.functionFirstInput}
                    />

                    <br></br>

                    <InputBox
                        inputType={'number'}
                        inputPlaceholder={'inserisci Voto'}
                        inputMaxLength={2}
                        callbackInput={props.functionSecondInput}
                    />

                    <br></br>
                    <InputBox
                        inputType={'date'}
                        inputPlaceholder={''}
                        inputMaxLength={2}
                        callbackInput={props.functionThirdInput}
                    />
                    <Button
                        label={'Salva'}
                        classCss={'Button'}
                        callbackButton={props.functionButton}
                    />
                </div>
            </div>
        </form>

    );
}

Card.defaultProps = {
    label: 'card'
}

Card.propTypes = {
    label: PropTypes.string,
    classCss: PropTypes.string,
    functionButton: PropTypes.func,
    functionFirstInput: PropTypes.func,
    functionSecondInput: PropTypes.func,
    functionThirdInput: PropTypes.func
}

export default Card;