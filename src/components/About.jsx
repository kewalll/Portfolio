import React from 'react'
import {ABOUT_TEXT} from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl' >About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap justify-center'>
            <div className='w-full lg:w-1/2'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:1}}
                className='flex justify-center lg:justify-start'>
                    <p className='lg:mx-5'>{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
