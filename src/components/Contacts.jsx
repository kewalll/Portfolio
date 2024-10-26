import React from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'
import resume from '../assets/Kewal_Nanavati_Resume.pdf'  // Adjust the path to where your resume PDF is located

const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-50}}
      transition={{duration:1}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1}}
        className='my-4'>Kewal Nanavati</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{x:100,opacity:0}}
        transition={{duration:1}}
        className='my-4'>{CONTACT.phoneNo}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a>
        <motion.div 
        whileInView={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:2}}
        className="mt-8">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-purple-600 px-4 py-2 text-white transition duration-300 hover:bg-purple-700"
          >
            View My Resume
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contacts
