'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link, {LinkProps} from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonNavigationProps {
    children: React.ReactNode,
    icon: IconProp,
    path: LinkProps['href'],
}

export default function ButtonNavigation({children, icon, path}: ButtonNavigationProps) {
    const pathname = usePathname();

    const isActive = pathname === path;

  return (
    <Link href={path} className={twMerge(isActive ? 'bg-gray-200' : "hover:bg-gray-100", 'rounded-full px-5 py-2 flex items-center gap-3', 'hover:scale-110 transition-all')}>
        <FontAwesomeIcon icon={icon} className='w-5'/>
        <span>{children}</span>
    </Link>
  )
}
