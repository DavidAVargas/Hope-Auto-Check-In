import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={require('../img/Hope-logo.png')} className="small-logo" />
        <p>
          Was your experience faster with this new system? Support your MA David A Vargas and write a review on how this helped you today.
        </p>
        <a href="https://www.google.com/maps/place/Hope+Cancer+Care+of+Nevada/@36.1457043,-115.7713067,11z/data=!4m12!1m2!2m1!1shope+cancer+care+of+nevada!3m8!1s0x80c8c78593caf21b:0x8f532f6fe75c8cf8!8m2!3d36.0983118!4d-115.2407708!9m1!1b1!15sChpob3BlIGNhbmNlciBjYXJlIG9mIG5ldmFkYZIBF2NhbmNlcl90cmVhdG1lbnRfY2VudGVy4AEA!16s%2Fg%2F11y81tvk9?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="review-link">
          Write a Google Review
        </a>
        <a 
        href="https://github.com/DavidAVargas" 
        target="_blank" 
        rel="noopener noreferrer"
        className="copyright-link">
        © 2024 by David A Vargas
      </a>
      </div>
    </footer>
  );
}

export default Footer;