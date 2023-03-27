import React from "react";
import './Header.css';
import unitoLogo from '../../assets/images/unitoLogo.svg';


function Header() {
    return (
        <div className="Header">
            <img src={unitoLogo} alt="Logo header" className="headerLogo" />
        </div>
    );
}


export default Header;