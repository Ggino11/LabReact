import React from 'react';
import logoFooter from '../../assets/images/logoFooter.svg'
import './Footer.css'
function Footer(props) {
  return (
    <footer className='Footer'>
      <div>
        <img src={logoFooter} alt="logo Footer" className="footerLogo"></img>
        <p>{props.copyright}</p>

      </div>
    </footer>
  );
};

export default Footer;