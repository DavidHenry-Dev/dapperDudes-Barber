import { logo } from '../assets';
import  animations from '../main.js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpPage from "../pages/SignUpPage.js";


const Header = () => {

    useEffect(() => {
        animations();
      }, []);

    return(
        <div className="menu-container">
        <img className="logo" src={ logo } />
        <div className="menu-button">
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
          <div className="menu-button-line"></div>
        </div>
        <nav className="menu slide-in-right">
          <ul>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to={SignUpPage}>Sign in</Link></li>
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