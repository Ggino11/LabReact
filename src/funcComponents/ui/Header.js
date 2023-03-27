import React from "react";
import './Header.css';
import unitoLogo from '../../assets/images/unitoLogo.svg';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="Header">
            <Link to="/LandingPage">
                <img src={unitoLogo} alt="Logo header" className="headerLogo" />
            </Link>
        </div>
    );
}


export default Header;
