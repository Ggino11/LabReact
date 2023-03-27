import React from 'react';
import '../assets/css/LandingPage.css';
import { Link } from 'react-router-dom';
import librettoUniversitario from '../assets/images/librettoUniversitario.png';

function LandingPage() {
    return (



        <div className="landingPage">
            <img src={librettoUniversitario} alt="Logo " className="Logo" />

            <div className="buttonLanding">

                <Link className="link" to={"/Home"}>Entra</Link>

            </div>
        </div>


    )
}

export default LandingPage;