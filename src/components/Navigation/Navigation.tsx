import React from 'react'
import ButtonNavigation from './ButtonNavigation'
import { faBars, faClock, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navigation() {
  return (
    <nav className='shadow-xl m-5 px-10 py-2 flex gap-20 items-center rounded-full'>
        {/* Nom Prenom */}
        <div>
            <p className='font-bold text-lg select-none'>Matthéo Bigorgne</p>
        </div>

        {/* Navigation */}
        <div className='flex gap-2'>
          <ButtonNavigation path={"/"} icon={faHome}>Accueil</ButtonNavigation>
          <ButtonNavigation path={"/projet"} icon={faBars}>Projet</ButtonNavigation>
          <ButtonNavigation path={"/about"} icon={faClock}>Bientot...</ButtonNavigation>
        </div>

        {/* Réseaux Sociaux (github, linkdin autre) */}
        <div className='flex gap-4 items-center'>
          <a href='https://github.com/Mattheo55' target='_blank' className='transition-all hover:scale-150'><FontAwesomeIcon icon={faGithub} className='w-5'/></a>
          <a href='https://fr.linkedin.com/in/matth%C3%A9o-bigorgne-3104262b5' target='_blank' className='transition-all hover:scale-150'><FontAwesomeIcon icon={faLinkedin} className='w-5'/></a>
        </div>
    </nav>
  )
}
