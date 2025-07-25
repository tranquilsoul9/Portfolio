import React from 'react';
// Importing the PROJECTS data array from the assets folder
import { PROJECTS } from '../assets';
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        // Main container for the projects section
        // Adds a bottom border for visual separation and padding
        <div id='projects' className='border-b border-neutral-900 pb-4'>
            {/* Section title with animation */}
            <motion.h1
                // Animates opacity and y position when component comes into view
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }} // Starts invisible and above
                transition={{ duration: 1.5 }} // Animation duration
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h1>
            <div>
                {/* Map through the PROJECTS array to render each project */}
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        {/* Left column for project image, with animation */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }} // Starts invisible and to the left
                            transition={{ duration: 1 }} // Animation duration
                            className='w-full lg:w-1/4'>
                            <img
                                src={project.image} // Project image source
                                alt={project.title} // Alt text for accessibility
                                width={150} // Fixed width for the image
                                height={150} // Fixed height for the image
                                className='mb-6 rounded' // Tailwind classes for styling
                            />
                        </motion.div>
                        {/* Right column for project details, with animation */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }} // Starts invisible and to the right
                            transition={{ duration: 1 }} // Animation duration
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6> {/* Project title */}
                            <p className='mb-4 text-neutral-400'>{project.description}</p> {/* Project description */}
                            {/* Map through technologies array to display each tech used */}
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
