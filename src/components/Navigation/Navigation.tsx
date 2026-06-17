'use client'

import React, { useEffect, useState } from 'react'
import ButtonNavigation from './ButtonNavigation'
import { faBars, faHome, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { twMerge } from 'tailwind-merge'
import { Badge } from '../ui/badge'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50 flex justify-center w-full transition-all duration-300">
      <nav 
        className={twMerge(
          'flex items-center justify-between bg-white shadow-xl transition-all duration-500 ease-in-out overflow-hidden',
          isScrolled 
            ? "w-full rounded-none px-10 py-2 mt-0" 
            : "w-[60%] max-w-5xl rounded-full px-10 py-3 mt-5"
        )}
      >
          {/* Nom Prénom */}
          <div className='flex flex-rox items-center gap-2'>
              <p className='font-bold text-lg select-none whitespace-nowrap'>Matthéo Bigorgne</p>
              <Badge>DEV</Badge>
          </div>

          {/* Navigation */}
          <div className='flex gap-2'>
            <ButtonNavigation path={"/"} icon={faHome}>Accueil</ButtonNavigation>
            <ButtonNavigation path={"/projet"} icon={faBars}>Projet</ButtonNavigation>
            <ButtonNavigation path={"/cv"} icon={faPerson}>Mon CV</ButtonNavigation>
          </div>

          {/* Réseaux Sociaux */}
          <div className='flex gap-4 items-center'>
            <a href='https://github.com/Mattheo55' target='_blank' rel="noreferrer" className='transition-all hover:scale-125'>
              <FontAwesomeIcon icon={faGithub} className='w-5'/>
            </a>
            <a href='https://fr.linkedin.com/in/matth%C3%A9o-bigorgne-3104262b5' target='_blank' rel="noreferrer" className='transition-all hover:scale-125'>
              <FontAwesomeIcon icon={faLinkedin} className='w-5'/>
            </a>
          </div>
      </nav>
    </div>
  )
}