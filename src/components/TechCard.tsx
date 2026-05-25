import Image from 'next/image'
import React from 'react'

interface TechCardProps {
    children: React.ReactNode,
    description: string,
    image: string
}

export default function TechCard({children, description, image}: TechCardProps) {
  return (
    <div className='rounded-lg w-40 border p-2 flex flex-col items-center gap-5 cursor-pointer border-gray-400 hover:-translate-y-2 transition-all'>
        <Image
            src={image}
            alt={children?.toString()!}
            width={80}
            height={80}
        />
        <div className='flex flex-col items-center text-center'>
            <p className='text-xl text-center'>{children}</p>
            <p className='text-gray-400'>{description}</p>
        </div>
    </div>
  )
}
