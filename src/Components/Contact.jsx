import React from 'react';
// Importing icons from react-icons library
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';
// Importing contact details from assets
import { CONTACT } from '../assets'; // Assuming CONTACT object is in assets/index.js

const Contact = () => {
    return (
        // Main contact section container
        <div id='contact' className='border-b border-neutral-900 pb-24'>
            {/* The main section containing the contact information */}
            <section className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md text-center"> {/* Added text-center for alignment */}
                {/* Section title with animation */}
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="mb-4 text-4xl tracking-tight font-bold text-blue-400">
                    Get in Touch
                </motion.h2>
                {/* Section description with animation */}
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="mb-8 lg:mb-16 font-light text-gray-400 sm:text-xl">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </motion.p>

                {/* Display of Email only */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 mb-10 text-lg md:text-xl"
                >
                    {/* Removed Phone Number link */}
                    <a href={`mailto:${CONTACT.email}`} className="text-neutral-300 hover:text-blue-400 transition-colors duration-300">
                        Email: dimplebhon910@gmail.com {/* Explicitly set email text */}
                    </a>
                </motion.div>

                {/* Social Media Links */}
                <div className='flex gap-8 text-center justify-center mt-10 mb-20 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/dimplebhondekar-146b81256/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-400 transition-colors duration-300">
                        <FaLinkedin className='text-5xl' />
                    </a>
                    <a href="https://github.com/tranquilsoul9" target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-white transition-colors duration-300">
                        <IoLogoGithub className='text-5xl' />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
