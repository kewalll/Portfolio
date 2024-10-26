import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'


const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>
                            {experience.role} - <span className='text-sm text-purple-200'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {experience.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className='rounded-full bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-300 shadow-md'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience
