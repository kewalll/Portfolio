import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div className="">
            {PROJECTS.map((project, index) => (
                <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                    <motion.div 
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4"
                    >
                        <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded'/>
                    </motion.div>
                    <motion.div 
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4"
                    >
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className='rounded-full bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-300 shadow-md'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-4"> {/* Added flexbox with gap between buttons */}
                            {/* GitHub Button */}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded bg-purple-600 px-3 py-1 text-sm text-white transition duration-300 hover:bg-purple-700"
                              >
                                View on GitHub
                              </a>
                            )}

                            {/* Live Project Button */}
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded bg-green-600 px-3 py-1 text-sm text-white transition duration-300 hover:bg-green-700"
                              >
                                View Live Project
                              </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
