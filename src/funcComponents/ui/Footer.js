import React from 'react';
import logoFooter from '../../assets/images/logoFooter.svg'
import './Footer.css'
function Footer() {
  return (
    <footer className='Footer'>
      <div>
        <img src={logoFooter} alt="logo Footer" className="footerLogo"></img>

      </div>
    </footer>
  );
};

export default Footer;