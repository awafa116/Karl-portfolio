import React from 'react';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
