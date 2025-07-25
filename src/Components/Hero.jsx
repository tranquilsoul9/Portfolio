import React, { useState, useEffect } from 'react';
// Importing content for the hero section from assets
import { HERO_CONTENT } from "../assets/index.js";
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';
// Importing the resume PDF from assets
import resumePdf from '../assets/Dimple_Bhondekar (1).pdf'; // Updated path to your specific resume PDF

// Animation variants for text containers
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 }, // Initial state: off-screen to the left, invisible
    visible: {
        x: 0, // Animates to its original x position
        opacity: 1, // Becomes fully visible
        transition: { duration: 0.5, delay: delay } // Animation duration and delay
    }
});

const Hero = () => {
    // Words for the typing animation
    const words = ["Leader", "Innovator", "Tech Enthusiast", "Community Builder"]; // Updated words for Dimple
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);

    // Effect for the typing animation
    useEffect(() => {
        const handleType = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                // Deleting text
                setCurrentText(currentWord.substring(0, letterIndex - 1));
                setLetterIndex(letterIndex - 1);
                if (letterIndex === 0) {
                    // If word is fully deleted, switch to typing next word
                    setIsDeleting(false);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }
            } else {
                // Typing text
                setCurrentText(currentWord.substring(0, letterIndex + 1));
                setLetterIndex(letterIndex + 1);
                if (letterIndex === currentWord.length) {
                    // If word is fully typed, switch to deleting
                    setIsDeleting(true);
                }
            }
        };

        // Set typing speed
        const typingSpeed = isDeleting ? 50 : 150; // Faster deletion
        const typingDelay = setTimeout(handleType, typingSpeed);

        // Cleanup function to clear timeout on component unmount
        return () => clearTimeout(typingDelay);
    }, [currentText, isDeleting, letterIndex, words, currentWordIndex]);

    return (
        // Main hero section container
        // Sets padding, bottom border, and ensures full width/height on large screens
        <div id='home' className='pt-28 px-8 border-b border-neutral-900 pb-4 lg:mb-36 w-full h-auto lg:h-[100vh]'>
            <div className='flex flex-wrap'>
                {/* Left column for text content */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start lg:ml-10'>
                        {/* Name with animation */}
                        <motion.h2
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Dimple Bhondekar
                        </motion.h2>
                        {/* Typing animation text */}
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'>
                            {currentText} |
                        </motion.span>
                        {/* Hero content description with animation */}
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-4 lg:py-6 font-light tracking-tighter text-neutral-300'>
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Download Resume Button */}
                        <a href="Dimple_Bhondekar (1).pdf" download="Dimple_Bhondekar_Resume.pdf"> {/* Directly referencing from public folder */}
                            <motion.button
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1.5, delay: 1.4 }}
                                className="flex items-center h-14 gap-3 bg-purple-500 px-4 py-2 rounded-md text-white tracking-wider shadow-xl transition duration-300 hover:bg-slate-600"
                            >
                                <span>Download Resume</span>
                                {/* Download icon */}
                                <svg
                                    className="ml-2 w-4 h-4 animate-bounce hover:animate-none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>
                        </a>

                    </div>
                </div>
                {/* Right column for profile picture */}
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='relative bg-gradient-to-b from-purple-500 via-gray-750 to-black rounded-full w-64 h-64 lg:w-96 lg:h-96 mt-9 mx-auto overflow-hidden'>
                            <img
                                className='absolute top-4 left-0 right-0 w-full h-[calc(100%-1.09rem)] object-cover rounded-full'
                                src="avatar.jpg" // Directly referencing from public folder
                                alt='Profile'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
