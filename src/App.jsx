import React from "react";
import "./style.css";
import { Navbar, Footer, } from "./components";
import { Routes, Route, } from 'react-router-dom'
import { SignUpPage, Home, GalleryPage, AccountPage, TestPage } from "./pages";


const App =() => (
  <>
  <Navbar />
    
    <Routes>
      <Route index element= {<Home />} />
      <Route path="/signuppage" element={<SignUpPage />} />
      <Route path="/gallerypage" element={<GalleryPage />} />
      <Route path="/accountpage" element={<AccountPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes> 
  
  <Footer className={'footer'} /> 
  </>
);
    

export default App
  