"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { links } from '../public/Constants.js';

import { usePathname } from 'next/navigation'
import Social from './Social'

import { useSession, signOut } from 'next-auth/react' 
import ThemeSwitch from './ThemeSwitch'


const Header = () => {
  
  const session = useSession();
  console.log(session)

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

   return (
    <>

    <header className='py-8 xl:py-12 text-white hidden xl:flex flex-row items-center justify-between'>

        <div className="container mx-auto flex flex-row items-center justify-between">

            <div className="flex flex-row items-center gap-8 text-gray-700 dark:text-white
            font-sans font-semibold text-md">
            
            <Nav />

            </div>
        </div>

        {session.status === 'authenticated' && (
            <div className='flex flex-row text-black dark:text-white mx-10 font-semibold
            gap-4'>
              <p>{session?.data?.user?.email}</p>

              <button onClick={() => {
         signOut({callbackUrl: '/'}) }}
              className='text-red-600 dark:text-red-200'>Logout</button>
            </div>
          )}

          


        <div className=' flex flex-row gap-6 items-center
        xl:mb-0 mt-1 mb-8'>
                <Social
                containerStyles="flex gap-4 mx-[5px]"
                iconStyles='text-4xl flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500'
                />

                <div className="flex flex-row justify-center items-center gap-[8.5px]">

                  
                <Link href="/contact" className='text-white'>
            <Button className="bg-green-600 hover:bg-green-700 active:bg-green-950
            rounded-full text-sm">Hire Me</Button>
            </Link>

            {session.status === 'unauthenticated' && (
            <Link href="/login" className='text-white'>
            <Button className="bg-orange-700 active:bg-orange-900
            rounded-full text-md">Log In</Button>
            </Link>
          )}
          
          <ThemeSwitch />

                </div>
                
              </div>
    </header>

    <div className="block xl:hidden mx-5 mt-6 mb-2">
    <nav className='flex flex-row justify-center items-center gap-8 mb-7'>
                {links.map((link, index) => {
                    return (
                    <Link href={link.path} key={index} 
                    className={`${
                        link.path === pathname && "border-b-2 text-gray-950 border-gray-950 dark:text-white dark:border-slate-200"
                    } text-xl text-gray-800 hover:text-gray-900 dark:text-slate-100 dark:hover:text-slate-200
                    transition-all duration-500
                    `}
                    style={{fontFamily: "sans-serif"}}
                     >
                        {link.name}
                    </Link>
                    )
                })}
            </nav>

            {session.status === 'authenticated' && (
            <div className='flex flex-row text-black dark:text-white justify-center mb-4 font-semibold
            gap-4 mx-auto'>
              <p>{session?.data?.user?.email}</p>

              <button onClick={() => {
         signOut({callbackUrl: '/'}) }}
              className='text-red-600 dark:text-red-200'>Logout</button>
            </div>
          )}

    </div>
    </>
  )
}

export default Header
