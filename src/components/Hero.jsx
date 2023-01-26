import bgImage from '../assets/barbershop-bg.jpg'
import Button from './Button';

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
                    <h1>Refine your look.</h1>
                    <h2> Be bold. Be Dapper.</h2>
                    <p>Define your uniqueness by your hairstyle</p>
                </div>
                <Button className='bookBtn'><a href="#">Book now</a></Button>
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