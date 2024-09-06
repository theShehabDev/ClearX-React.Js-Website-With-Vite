import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About"
import Reviews from "./Components/Reviews/Reviews";
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';
import Pricing from "./Components/Pricing/Pricing";

const App = () => {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subtitle="About Us" title="Professional Window Cleaning You Can Trust"/>
      <About/>
      <Title subtitle="Our Services" title="What We Provide"/>
      <Services/>
      <Title subtitle="Pricing" title="Our Pricing Structure"/>
      <Pricing/>
      <Title subtitle="Our Reviews" title="What Our Clients Think"/>
      <Reviews/>
      <Title subtitle="Contact Us" title="Reach out to us"/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  )
};

export default App;