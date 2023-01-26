import { logo } from '../assets';
import  animations from '../main.js'
import { useEffect } from 'react';


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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
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