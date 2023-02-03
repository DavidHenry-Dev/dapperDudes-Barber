import { Dash, Section, Barber, Card, Hero, Button } from "../components"
import { barber1, barber2, barber3, cuttingHair } from '../assets'
import { Link } from "react-router-dom"


const Home = () => (

<>
    <Hero>
        <div className = "container main">
            <div className ="headline">
                <h1>Refine your look.</h1>
                <h2> Be bold. Be Dapper.</h2>
            </div>
            <Link to="/signuppage"><Button className='bookBtn'>Book now</Button></Link>
            <Link to="/gallerypage"><Button className='galleryBtn'>View our Work</Button></Link>            
        </div>
    </Hero>
    {/* Info & about sections */}
    <Dash containerClass='dashContainer' dashClass='dash' title='About us'/>
    <Section className='about-section' title={'Relax, Look great, Feel confident'}>
        <img className="cuttingHair" src={ cuttingHair } />
        <p>Since 1997, DapperDudes have prided ourselves on providing a elevated and upscale experience. Our skilled barbers specialize in precision haircuts, hot towel shaves, and beard trims, and much more. With a contemporary and masculine aesthetic, we provide the perfect spot to relax and be pampered. Whether you're in need of a quick trim or a complete grooming experience, our barbers are ready to serve you</p>
    </Section>
    {/* Services Section */}
    <Dash containerClass='dashContainer' dashClass='dash' title='Our Top Services'/>
    <Section className='services-section' title={'A refined experience'}>
        <Card className='service' icon="fas fa-cut" title='The Premium' price='$55.00' service="Our premium service offers a luxurious experience, starting with a personalized consultation. Next, we'll shampoo and condition your hair with premium products, followed by a precision cut and styling to leave you looking and feeling your best"/>
        <Card className='service' icon="fas fa-cut" title='The Classic' service="Indulge in our Classic Shampoo and Style service, where we'll pamper your hair with a luxurious shampoo and conditioner, followed by a precision styling to leave you looking and feeling refreshed" price="$35.00" />
        <Card className='service' icon="fas fa-cut" title='Traditional Straight Razor Shave' service='The ultimate in grooming with our Traditional Straight Razor Shave. Starts with a hot towel to open your pores, followed by a rich lather and a close, smooth shave using a straight razor' price='$40.00' />
        <Card className='service' icon="fas fa-cut" title="Art of Hair Coloring" price="$65.00" service="Transform yourself with our coloring service. Our experts will work with you to create a dashing look that compliments and enhances your features. Whether you're looking for a subtle change or a bold statement, we have the skills and experience to deliver it"/>
    </Section>
        <Link to="signuppage"><Button className='scheduleBtn'>Schedule now</Button></Link>
    <Dash containerClass='dashContainer2' dashClass='dash2' title='The team'/>
    {/* team section */}
    <Section className="team-section" title='Masters of the craft'>
        <Barber className='employee' src={barber1} name='David Lee' about='David recently moved here from the UK, where he learned the art of barbering in a traditional apprenticeship. He brings a unique perspective to the barbershop, and his clients love his attention to detail and the care he takes with each cut' />
        <Barber className='employee' src={barber2} name='Joseph Thomas' about="Joseph is a retired military vet who decided to pursue his passion for barbering after leaving the service. He's known for his strict attention to detail and his ability to deliver precise, military-style cuts and is a favorite with local veterans" />
        <Barber className='employee' src={barber3} name='Michael Rodriguez' about='Michael is a third-generation barber, following in the footsteps of his father and grandfather. He prides himself on his precision cuts and his ability to make his clients feel comfortable and relaxed in the barber chair'/>
    </Section>
    {/* Contact section */}
    <Section className='contact-section' title='Come check us out'>
        <div className="contact-info">
            <p><i className="fa fa-phone"></i> 555-555-5555</p>
            <p><i className="fa fa-envelope"></i> info@example.com</p>
            <p><i className="fa fa-map-marker"></i> 123 Main St, Anytown USA</p>
        </div>
        <Link to='/signuppage'><Button className='appntBtn'>Make an appointment</Button></Link>
    </Section>
</>

)


export default Home