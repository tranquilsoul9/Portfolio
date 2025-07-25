import React, { useState } from 'react';
// Importing icons for the mobile menu toggle
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// Importing Link component for smooth scrolling navigation
import { Link } from 'react-scroll'; // Imported as 'Link'

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Main navigation container
    // Fixed position, full width, dark background.
    <nav className='fixed w-full z-10 py-6 bg-[rgb(27,27,39)] shadow-lg'>
      {/* Inner container to align content with the rest of the page's main content area */}
      {/* Added px-8 to provide consistent horizontal padding for Navbar content */}
      <div className='flex items-center justify-between px-8'> {/* Re-added px-8 here */}
        {/* Portfolio title/logo */}
        <h1 className='font-semibold text-2xl tracking-wider bg-gradient-to-r from-pink-300 via-slate-500 to-pink-300 bg-clip-text text-transparent'>
          Dimple Bhondekar
        </h1>

        {/* Mobile menu toggle button (visible only on small screens) */}
        <div className='lg:hidden flex z-20'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              // X icon when menu is open
              <XMarkIcon className='w-6 h-6 text-white' />
            ) : (
              // Hamburger icon when menu is closed
              <Bars3Icon className='w-6 h-6 text-white' />
            )}
          </button>
        </div>

        {/* Navigation links list */}
        {/* Conditional classes for mobile menu visibility and styling */}
        <ul className={`fixed top-0 right-0 h-full bg-[rgb(27,27,39)] flex flex-col items-start justify-center gap-8 p-8 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 lg:transform-none`}>
          {/* Close menu button for mobile (inside the menu) */}
          {isOpen && (
            <button onClick={toggleMenu} className='absolute top-6 right-6 lg:hidden'>
              <XMarkIcon className='w-6 h-6 text-white' />
            </button>
          )}

          {/* Navigation links using react-scroll's Link component */}
          {/* Each Link points to a specific section ID on the page */}
          <Link to="home" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Home</li>
          </Link>
          <Link to="about" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>About Me</li>
          </Link>
          <Link to="technologies" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Technologies</li>
          </Link>
          <Link to="experience" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Experiences</li>
          </Link>
          <Link to="projects" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Projects</li>
          </Link>
          <Link to="contact" spy={true} offset={-100} duration={500} smooth={true} activeClass='active' onClick={toggleMenu}>
            <li className='py-2 lg:py-0 cursor-pointer hover:text-purple-400'>Contact Me</li>
          </Link>
        </ul>
      </div> {/* End of inner container */}
    </nav>
  );
};

export default Navbar;
