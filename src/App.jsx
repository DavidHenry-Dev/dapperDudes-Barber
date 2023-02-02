import React from "react";
import "./style.css";
import { Navbar, Footer, } from "./components";
import { Routes, Route, } from 'react-router-dom'
import { SignUpPage, Home, Gallery } from "./pages";


const App =() => (
  <>
  <Navbar />
    
    <Routes>
      <Route index element= {<Home />} />
      <Route path="/signuppage" element={<SignUpPage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes> 
  
  <Footer className={'footer'} /> 
  </>
);
    

export default App
  