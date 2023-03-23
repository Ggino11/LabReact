import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Button from './Button';
import InputBox from './InputBox';

function Card(props) {
    function save(){
        console.log()
    }
    return (

        <form className="card">
            <div>
                <h3>{props.label}</h3><br></br>
                <InputBox
                    inputType={'text'}
                    inputPlaceholder={"inserisci il nome esame"}
                    inputMaxLength={99}
                />

                <br></br>

                <InputBox
                    inputType={'number'}
                    inputPlaceholder={'inserisci Voto'}
                    inputMaxLength={2}
                />

                <br></br>
                <InputBox
                    inputType={'date'}
                    inputPlaceholder={''}
                    inputMaxLength={2}
                />
                <Button
                    label={'Salva'}
                    classCss={'Button'} 
                    callbackButton ={save}/>
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
}

export default Card;