import React from 'react';
// Importing icons from react-icons library
import { RiReactjsLine } from 'react-icons/ri';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { DiJava } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiKotlin } from 'react-icons/si';
import { SiJetpackcompose } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoAndroid } from 'react-icons/io';
// Importing motion for animations from framer-motion library
import { motion } from 'framer-motion';


// Define animation variants for the icons
const iconVariants = (duration) => ({
    // Initial state: slightly above its resting position
    initial: { y: -10 },
    // Animation state: oscillates up and down
    animate: {
        y: [10, -10], // Moves from 10px down to 10px up relative to its initial position
        transition: {
            duration: duration, // Duration of one cycle of the animation
            ease: "linear", // Linear transition for continuous movement
            repeat: Infinity, // Repeats indefinitely
            repeatType: "reverse" // Reverses direction on each repeat
        }
    }
});

const Technologies = () => {
    return (
        // Main container for the technologies section
        // Adds a bottom border for visual separation and padding
        <div id='technologies' className='border-b border-neutral-800 pb-24'>
            {/* Section title with animation */}
            <motion.h1
                // Animates opacity and y position when component comes into view
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }} // Starts invisible and above
                transition={{ duration: 1.5 }} // Animation duration
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>

            {/* Container for the technology icons, with animation */}
            <motion.div
                // Animates opacity and x position when component comes into view
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }} // Starts invisible and to the left
                transition={{ duration: 1.5 }} // Animation duration
                className='flex flex-wrap items-center justify-center gap-4'>
                {/* Individual technology icons with their respective animations */}
                <motion.div
                    variants={iconVariants(2.5)} // Apply animation variants with a specific duration
                    initial="initial" // Set initial state
                    animate="animate" // Trigger animation
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' /> {/* React icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiNodejs className='text-7xl text-green-500' /> {/* Node.js icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' /> {/* MongoDB icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl' /> {/* Express.js icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbSql className='text-7xl text-[#1e75bc]' /> {/* SQL icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiJava className='text-7xl text-red-500' /> {/* Java icon */}
                </motion.div>
            </motion.div>

            {/* Second row of technology icons, with animation and top margin */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mt-8'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-7xl text-[#f0db4e]' /> {/* JavaScript icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiKotlin className='text-7xl text-[#814ff0]' /> {/* Kotlin icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJetpackcompose className='text-7xl text-[#4587ed]' /> {/* Jetpack Compose icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className='text-7xl text-[#0671d0]' /> {/* Python icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoGithub className='text-7xl text-cyan-400' /> {/* GitHub icon */}
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoAndroid className='text-7xl text-[#a3db3a]' /> {/* Android icon */}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
