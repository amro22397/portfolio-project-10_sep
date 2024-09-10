"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { links } from '@/public/Constants';
import { usePathname } from 'next/navigation'
import Social from './Social'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

   return (
    <>
    <header className='py-8 xl:py-12 text-white hidden xl:flex items-center'>
        <div className="container mx-auto flex flex-row items-center justify-between">

            <div className="flex flex-row items-center gap-8 text-gray-700
            font-sans font-semibold text-md">
              <Link href="/contact" className='text-white'>
            <Button className="rounded-full text-sm">Hire Me</Button>
            </Link>
            
            <Nav />

            </div>
        </div>

        <div className='xl:mb-0 mt-1 mb-8'>
                <Social
                containerStyles="flex gap-4"
                iconStyles='text-4xl flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500'
                />

              </div>
    </header>

    <div className="block xl:hidden mx-5 mt-6">
    <nav className='flex flex-row justify-center items-center gap-8 mb-7'>
                {links.map((link, index) => {
                    return (
                    <Link href={link.path} key={index} 
                    className={`${
                        link.path === pathname && "border-b-2 text-gray-950 border-gray-950"
                    } text-xl text-gray-800 hover:text-gray-900
                    transition-all duration-500
                    `}
                    style={{fontFamily: "sans-serif"}}
                     >
                        {link.name}
                    </Link>
                    )
                })}
            </nav>
    </div>
    </>
  )
}

export default Header
