import React from 'react';
import { Link } from 'react-router-dom';
import Dash from './Dash';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
       <ul>
            <li><a href="#">Home</a></li>
            <span>|</span>
            <li><a href="#">About</a></li>
            <span>|</span>
            <li><a href="#">Services</a></li>
            <span>|</span>
            <li><a href="#">Appointment</a></li>
        </ul>
      <p>Copyright © 2023. All rights reserved.</p>
    </footer>
  );
}

export default Footer;