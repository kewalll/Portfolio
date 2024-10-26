import React from 'react'
import {RiReactjsLine} from 'react-icons/ri';
import { TbBrandCpp } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from 'framer-motion'

const iconVar = (duration)=>({
  inital:{y:-10},
  animate:{
    y:[-10,10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat:Infinity,
      repeatType:"reverse"
    }    
  }
})

const Technology = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{x:-100, opacity:0}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVar(2.5)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-5xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVar(1.5)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandCpp className='text-5xl text-blue-500'/>
        </motion.div>
        <motion.div 
        variants={iconVar(3)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <AiOutlinePython className='text-5xl text-yellow-300'/>
        </motion.div>
        <motion.div 
        variants={iconVar(2)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-5xl text-sky-700'/>
        </motion.div>
        <motion.div 
        variants={iconVar(3.5)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-5xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVar(3)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <GrMysql className='text-5xl text-orange-400'/>
        </motion.div>
        <motion.div 
        variants={iconVar(4.5)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-5xl text-green-500'/>
        </motion.div>
        <motion.div 
        variants={iconVar(2.75)}
        intial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandJavascript className='text-5xl text-yellow-400'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
