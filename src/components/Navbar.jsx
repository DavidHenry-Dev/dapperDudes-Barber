import { logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Navbar = () => {

  const path  = useLocation();

    useEffect(() =>{
      setNavMobile(false);
      }, [path])

      const [navMobile, setNavMobile] = useState(false);
      
      const toggleNav = () => {
        setNavMobile(!navMobile) 
      }

  return (
    <nav>
        <img className="logo" src={ logo } />
        <div className="nav-button" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={
          navMobile ? "nav-menu expanded" : "nav-menu"
        }>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/SignUpPage">Appointments</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar;