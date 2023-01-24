import React from "react";
import "./style.css";
import { Header, Hero, Barber }from "./components";
import { barber1, barber2, barber3 } from './assets'



export default function App() {
  
    return (
        <>
          <Header />
            {/* Main hero section */}
          <Hero />
            {/* Info & about sections */}
            <section className="infoSect">
                <div className="container">
                <div>
                    <i className="fa-solid fa-scissors"></i>
                    <h4>EXPERT BEAUTICIANS</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit iure, sequi consectetur similique architecto.</p>
                </div>
                <div>
                    <i className="fa-solid fa-mortar-pestle"></i>
                    <h4>QUALITY SERVICE</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt reprehenderit doloribus magnam, eaque quos!</p>
                </div>
                <div>
                    <i className="fa-solid fa-ruler"></i>
                    <h4>BEAUTY PRODUCTS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perferendis, aliquam excepturi saepe numquam ut!</p>
                </div>
                </div>
            </section>
            {/* Video preview section */}
            <section className="vidSect">
                <div className="container">
                    <section>
                    <section><img src="/src/assets/cuttingHair.jpg" alt=""/>
                    <h2>MAKE YOUR OWN MOMENTUM</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo sapiente amet fugit, voluptatibus error tempore in id. Sequi error ullam eum praesentium earum, alias vero eius maiores iste sit.</p>
                    <button><a href="#">- READ MORE</a></button>
                </section>
                </section>
            </div>
            </section>
            {/* stylist section */}
            <section className="stylistSect">
                <div className="container">
                <Barber src={barber1} />
                <Barber src={barber2} />
                <Barber src={barber3} />
            </div>
            </section>
            {/* Offers section */}
            <section className="offerSect">
                <div className="container">
                <section>
                <span>COLOUR DAY OFFER!</span>
                <p>-10% ON HAIRCUT COLOR AND HIGHLIGHT</p>
                <button><a href="#">- BOOK APPOINTMENT</a></button>
                </section>
                <img src="https://res.cloudinary.com/djlowrayn/image/upload/v1645448981/hairSalon/haircut_hqn2wx.png" alt=""/>
                </div>
            </section>
            {/* Gallery sections */}
               <section className="gallerySect">
            <div className="container">
                    <h1>OUR LOOKBOOK</h1>
                    <img src="https://res.cloudinary.com/djlowrayn/image/upload/v1646329860/hairSalon/gallery_h4te8g.png" alt=""/>
                </div>
                </section>
       
        </>
        
    );
  }