import React from 'react';

import HeroHome from '../partials/HeroHome';
import About from '../partials/About';
import Services from '../partials/Services';
import Questions from '../partials/Questions'
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <About />
        <Questions/>
        <Services />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;