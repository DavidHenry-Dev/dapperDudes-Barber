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
        <Link to="/"><img className="logo" src={ logo } /></Link>
        <div className="nav-button" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={
          navMobile ? "nav-menu expanded" : "nav-menu"
        }>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallerypage">Gallery</Link></li>
            <li><Link to="/SignUpPage">Appointments</Link></li>
            <li><Link to="/accountPage">Test AccountPage </Link></li>
          </ul>
        </div>
      </nav>
    )
  }

export default Navbar;