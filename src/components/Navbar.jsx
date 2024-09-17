import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { anticipate } from 'framer-motion';

const Navbar = () => { 
    return <motion.div 
            initial={{ opacity:0}}
            animate={{opacity:1}}
            transition={{ease:"circOut", duration:0.5}}
            exit={{ opacity:0}}
            className='flex fixed z-49'>
            <div className='bg-black w-screen h-screen opacity-75'></div>
            <motion.div
            initial={{y:-100, opacity:0}}
            animate={{opacity:1, y:0}}
            exit={{ opacity:0 }}
            transition={{ease:"circOut", duration:0.5}}
            className='fixed top-0 left-0 h-screen w-screen m-0 flex flex-col text-white shadow-1g justify-center items-center text-3xl italic'>
                
                <div className='flex flex-col space-y-5 justify-center items-center'>
                    <motion.p className='cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>Components</motion.p>
                    <motion.p className='cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>Playground</motion.p>
                    <motion.p className='cursor-pointer' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>This is Ahmed.</motion.p>
                </div>
            </motion.div>
            
        </motion.div>
}

export default Navbar
