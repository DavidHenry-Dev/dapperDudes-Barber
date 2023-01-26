import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <nav>
        {/* <Link to="/schedule">Schedule</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link> */}
      </nav>
    </footer>
  );
}

export default Footer;