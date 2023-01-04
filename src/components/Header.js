const Header = () => {
    return(
        <header>
            <nav>
                <img src="https://res.cloudinary.com/djlowrayn/image/upload/c_scale,w_200/v1653853880/hairSalon/logo2_aiaexh.png" className = "logo" alt=""/>
                <ul>
                 <Link url={'#'} text={'About'}/>  
                 <Link url={'#'} text={'Services'}/>  
                 <Link url={'#'} text={'Contact'}/>   
                </ul>
            </nav>
        </header>
    )
}

const Link = ({url,text}) => {
    return <li><a href={url}>{text}</a></li>
}

export default Header;