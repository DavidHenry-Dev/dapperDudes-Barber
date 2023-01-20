import bgImage from '../assets/barbershop-bg.jpg'

const Hero = () => {
    return(
        <main style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        width: '100%',
        height: '100%',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }}>
            <div className = "container main">
                <div className ="headline">
                    <h1>Refine your look. Be bold. Be Dapper.</h1>
                    <span>Divide your uniqueness by your hairs in style</span>
                    <button><a href="#">Our Services</a></button>
                </div>
                <div className ="bookNow">
                    <span>Your First Visit?</span>
                    <p>-20% for the first classic hair coloring</p>
                    <button><a href="#">- Book Online</a></button>
                </div>
            </div>
        </main>
        )
}

export default Hero;