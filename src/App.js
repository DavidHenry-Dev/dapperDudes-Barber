import "./style.css";
import Barber from "./components/Barber";
import Header from "./components/Header";


export default function App() {
  
    return (

        <>
          <Header />
            {/* Main hero section */}
            <main>
                <div class = "container main">
                <div class ="headline">
                    <h1>BLONDE & HIGHLIGHT</h1>
                    <span>Divide your uniqueness by your hairs in style</span>
                    <button><a href="#">Our Services</a></button>
                </div>
                <div class ="bookNow">
                    <span>Your First Visit?</span>
                    <p>-20% for the first classic hair coloring</p>
                    <button><a href="#">- Book Online</a></button>
                </div>
            </div>
            </main>
            {/* Info & about sections */}
            <section class="infoSect">
                <div class="container">
                <div>
                    <i class="fa-solid fa-scissors"></i>
                    <h4>EXPERT BEAUTICIANS</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit iure, sequi consectetur similique architecto.</p>
                </div>
                <div>
                    <i class="fa-solid fa-mortar-pestle"></i>
                    <h4>QUALITY SERVICE</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt reprehenderit doloribus magnam, eaque quos!</p>
                </div>
                <div>
                    <i class="fa-solid fa-ruler"></i>
                    <h4>BEAUTY PRODUCTS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum perferendis, aliquam excepturi saepe numquam ut!</p>
                </div>
                </div>
            </section>
            {/* Video preview section */}
            <section class="vidSect">
                <div class="container">
                    <section>
                    <section><img src="/images/cuttingHair.jpg" alt=""/>
                    <h2>MAKE YOUR OWN MOMENTUM</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo sapiente amet fugit, voluptatibus error tempore in id. Sequi error ullam eum praesentium earum, alias vero eius maiores iste sit.</p>
                    <button><a href="#">- READ MORE</a></button>
                </section>
                </section>
            </div>
            </section>
            {/* stylist section */}
            <section class="stylistSect">
                <div class="container">
                <Barber />
                <section><img src="/images/barber2.jpg" alt=""/></section>
                <section><img src="/images/barber3.jpg" alt=""/></section>
            </div>
            </section>
            {/* Offers section */}
            <section class="offerSect">
                <div class="container">
                <section>
                <span>COLOUR DAY OFFER!</span>
                <p>-10% ON HAIRCUT COLOR AND HIGHLIGHT</p>
                <button><a href="#">- BOOK APPOINTMENT</a></button>
                </section>
                <img src="https://res.cloudinary.com/djlowrayn/image/upload/v1645448981/hairSalon/haircut_hqn2wx.png" alt=""/>
                </div>
            </section>
            {/* Gallery sections */}
               <section class="gallerySect">
            <div class="container">
                    <h1>OUR LOOKBOOK</h1>
                    <img src="https://res.cloudinary.com/djlowrayn/image/upload/v1646329860/hairSalon/gallery_h4te8g.png" alt=""/>
                </div>
                </section>
       
        </>
        
    );
  }