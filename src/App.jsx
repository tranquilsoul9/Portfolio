import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    // Main container for the entire application, setting text color and anti-aliasing
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900'>
      {/* Fixed background element for visual effect */}
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* Radial gradient background for a subtle visual depth */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content container, limiting width and centering content */}
      {/* Removed px-8 to allow content to go flush to the edges if desired by child components */}
      <div className=' container mx-auto'> {/* Removed px-8 from here */}
        {/* Render each main section component */}
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experiences />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
