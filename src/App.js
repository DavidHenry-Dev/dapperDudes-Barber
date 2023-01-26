import React from "react";
import "./style.css";
import { Header, Hero, Barber, Section, Card, Button, Footer }from "./components";
import { barber1, barber2, barber3, cuttingHair } from './assets'
import { Link } from 'react-router-dom';



export default function App() {
  
    return (
        <>
          <Header />
            {/* Main hero section */}
          <Hero />
            {/* Info & about sections */}
            <Section className='about-section' title={'Relax, Look great, Feel confident'}>
             <img className="cuttingHair" src={ cuttingHair } />
             <p>Since 1997, DapperDudes have prided ourselves on providing a elevated and upscale experience. Our skilled barbers specialize in precision haircuts, hot towel shaves, and beard trims, and much more. With a contemporary and masculine aesthetic, we provide the perfect spot to relax and be pampered. Whether you're in need of a quick trim or a complete grooming experience, our barbers are ready to serve you</p>
            </Section>
            {/* Services Section */}
            <Section className='services-section' title={'Our Specialties'}>
              <Card className='service'/>
              <Card className='service'/>
              <Card className='service'/>
              <Card className='service'/>
              <Button className='scheduleBtn'><a href='#'>Schedule now</a></Button>
            </Section>
            {/* team section */}
            <Section className="team-section" title='Our Team'>
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
                <Button className='appntBtn'>Make an appointment</Button>
            </Section>
            <Footer className='footer' />
        </>
    );
  }