

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { links } from '../public/Constants'



const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname &&
                    "border-b-2 border-gray-800 dark:border-slate-100"
                }`}>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav
