import { logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Header = () => {

  const path  = useLocation();
  useEffect(() =>{
    setMenuOpen(false);
  }, [path])

      const [menuOpen, setMenuOpen] = useState(false);
      
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      }

  


    return(

      

        <div className="menu-container">
        <img className="logo" src={ logo } />
        <div className="menu-button" onClick={toggleMenu}>
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
        </div>

        <nav className={`menu ${menuOpen ? 'slide-in-right' : ''}`} style={{ display: menuOpen ? 'flex' : 'none' }}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/SignUpPage">Sign in</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>



        // <header>
        //     <nav>
        //     <img src={logo} className="logo" />
        //         <ul>
        //          <Link url={'#'} text={'About'}/>  
        //          <Link url={'#'} text={'Services'}/>  
        //          <Link url={'#'} text={'Contact'}/>   
        //         </ul>
        //     </nav>
        // </header>
    )
}

// const Link = ({url,text}) => {
//     return <li><a href={url}>{text}</a></li>
// }

export default Header;