import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './InputBox.css'

function InputBox(props) {
    
    function onChangeInput(event){
        props.callbackInput(event.target.value)
        //console.log('input', event.target.value)
    }
    
    return (
        <input
            onChange={onChangeInput}
            type={props.inputType}
            placeholder={props.inputPlaceholder}
            maxLength={props.inputMaxLength}
            className="input"

        />
    )

}

InputBox.propTypes = {
    inputType:PropTypes.string,
    inputPlaceholder:PropTypes.string,
    inputMaxLength:PropTypes.number,
    callbackInput: PropTypes.func.isRequired
}

export default InputBox;