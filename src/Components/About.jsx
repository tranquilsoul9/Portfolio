import React from 'react';
// Importing the about image from assets
import aboutImg from "../assets/aboutimg.jpg";// Importing the ABOUT_TEXT content from assets
import { ABOUT_TEXT } from "../assets/index.js";
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';

const About = () => {
  return (
    // Main About section container
    // Adds a bottom border for visual separation and padding
    <div id='about' className='border-b border-neutral-900 pb-4'>
      {/* Section title with animation */}
      <motion.h1
        // Animates opacity and y position when component comes into view
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }} // Starts invisible and above
        transition={{ duration: 1.5 }} // Animation duration
        className='my-20 text-center text-4xl'>
        About
        {/* 'Me' part of the title with its own animation */}
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='text-neutral-500'>
          Me
        </motion.span>
      </motion.h1>
      <div className='flex flex-wrap'>
        {/* Left column for the about image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
            // Animates opacity and x position when component comes into view
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }} // Starts invisible and to the left
            transition={{ duration: 0.5 }} // Animation duration
            className='flex items-center justify-center'>
            <img className='rounded-2xl h-96 object-cover' src={aboutImg} alt="About Me" />
          </motion.div>
        </div>
        {/* Right column for the about text */}
        <motion.div
          // Animates opacity and x position when component comes into view
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }} // Starts invisible and to the right
          transition={{ duration: 0.5 }} // Animation duration
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 text-neutral-400'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
