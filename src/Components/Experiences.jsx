import React from 'react';
// Importing the EXPERIENCES data array from the assets folder
import { EXPERIENCES } from '../assets';
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';

const Experiences = () => {
    return (
        // Main container for the Experiences section
        <div id='experience' className='border-b border-neutral-900 pb-4'>
            {/* Section title */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Experience
            </motion.h1>
            <div>
                {/* Map through the EXPERIENCES array to render each item */}
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        {/* Left column for the image and year, with animation */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            // Adjusted classes for alignment: flex-col, items-center (on small), items-start (on large)
                            className='w-full lg:w-1/4 flex flex-col items-center lg:items-start'>
                            {experience.image && ( // Only render image if 'image' property exists in the data
                                <img
                                    src={experience.image} // Use the image URL from the experience data
                                    alt={experience.role} // Alt text for accessibility
                                    className='w-16 h-16 mb-2 rounded-full object-cover' // Styling for the company logo
                                />
                            )}
                            {/* Date is below the image and aligned with it */}
                            <p className='mb-2 text-sm text-neutral-400 text-center lg:text-left'>{experience.year}</p>
                        </motion.div>
                        {/* Right column for experience details, with animation */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{experience.role}</h6>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {/* Re-added technologies map here */}
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;
