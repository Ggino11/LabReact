import React from "react";
import './Button.css'

import PropTypes from 'prop-types'; // ES6

function Button(props) {

    function clickButton(event) {
        //console.log('CLICK', event)
        props.callbackButton()
    }

    return (
        <button onClick={clickButton} className={props.classCss}>

            {props.label}

        </button>
    )

}

Button.defaultProps = {
    label: 'click'
}

Button.propTypes = {
    label: PropTypes.string,
    classCss: PropTypes.string,
    
}

export default Button