import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Platforms from './components/Platforms';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Platforms />
        <Demo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
