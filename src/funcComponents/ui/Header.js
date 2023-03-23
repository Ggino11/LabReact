import React from "react";
import './Header.css';
import unitoLogo from '../../assets/images/unitoLogo.svg';
import PropTypes from 'prop-types';

function Header() {
    return (
        <div className="Header">
            <img src={unitoLogo} alt="Logo header" className="headerLogo" />
        </div>
    );
}


export default Header;