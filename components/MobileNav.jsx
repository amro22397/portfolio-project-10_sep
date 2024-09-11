"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import { links } from '../public/Constants';


const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className="text-[32px] text-gray-700" />
        </SheetTrigger>
        <SheetContent className="flex flex-col" >
            <div className="mt-32 mb-40 text-center text-2xl">
            </div>

            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => {
                    return <Link href={link.path} key={index} 
                    className={`${
                        link.path === pathname && "border-b-2 text-gray-700 border-gray-800"
                    } text-xl capitalize hover: hover:text-gray-700 transition-all
                    `}
                     >
                        {link.name}
                    </Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
