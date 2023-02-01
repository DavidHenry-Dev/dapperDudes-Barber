import { logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Navbar = () => {

  const path  = useLocation();

    useEffect(() =>{
      setNavExpanded(false);
      }, [path])

      const [navExpanded, setNavExpanded] = useState(false);
      
      const toggleNav = () => {
        setNavExpanded(!navExpanded) 
      }

  return (
    <nav>
        <img className="logo" src={ logo } />
        <div className="nav-button" onClick={toggleNav}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        </div>
        <div className={
          navExpanded ? "nav-menu expanded" : "nav-menu"
        }>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/SignUpPage">Appointments</Link></li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar;