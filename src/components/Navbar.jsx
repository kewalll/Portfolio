import React from 'react'
import logo from '../assets/logo2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className=' mb-19 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-14' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/kewal-nanavati-aaa22b24a/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href='https://github.com/kewalll' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <FaGithub />
            </a>
            <a href='https://www.instagram.com/kewalll_215' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <FaInstagram />
            </a>
            <a href='https://twitter.com/Kewal64226726' target='_blank' rel='noopener noreferrer' aria-label='X (Twitter)'>
                <FaSquareXTwitter />
            </a>
        </div> 
    </nav>
  )
}

export default Navbar
