
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FCFCFC] text-charcoal antialiased selection:bg-eggplant selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;
