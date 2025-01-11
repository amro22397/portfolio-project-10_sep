'use client'
import React from 'react'
import Social from './Social'
import Link from 'next/link'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
    const session = useSession();

  return (
    <footer className=' hidden max-xl:flex flex-col gap-7 items-center mt-6
        xl:mb-0 mb-8 mx-auto justify-center'>
                
                <div className="flex flex-row items-center gap-[13.20px]">
                <Social
                containerStyles="flex gap-4 justify-center mx-auto"
                iconStyles='text-4xl flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500'
                />
                <ThemeSwitch />
                </div>


<div className="flex flex-row items-center gap-[8.5px]">

                  
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

</div>
                
        </footer>
  )
}

export default Footer
