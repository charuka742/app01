import React from 'react';
import Navbar from './Components/Navbar';
import { Hero } from './Components/Hero';
import About from './Components/About';
import Support from './Components/Support';
import AllnOne from './Components/AllnOne';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllnOne />
      <Pricing /> 
      <Footer />
    </>
  );
};

export default App;
