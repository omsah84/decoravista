

import React from "react";
import Slider from "./components/Slider"
import Topbar from "./components/Topbar"
import Navbar from "./components/Navbar"
import Slide from "./components/Slide";
import Footer from "./components/Footer"
import Offer from "./components/Offer"
export default function App() {
  return (
    <div>
    <Topbar/>
    <Navbar/>
     <Slide/>
      <Slider/>
    <Offer/>
    <Slide/>
    <Footer/>

    </div>
  );
}

export default App;