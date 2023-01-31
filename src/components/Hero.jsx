import bgImage from '../assets/barbershop-bg.jpg'

const Hero = ({children}) => {
    return(
        <main style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        width: '100%',
        height: '100%',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }}>
            {children}
        </main>
        )
}

export default Hero;