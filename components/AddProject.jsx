'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const AddProject = () => {


    const session = useSession();

  return (
    <>
    {session.status === 'authenticated' && (

        <Link href="/add-project"
        className='bg-yellow-600 px-4 py-[6px] text-white dark:text-white rounded-sm
        max-sm:mx-2 hover:bg-yellow-700 active:bg-yellow-800 transition-all duration-500
        text-lg'
        >
        Add Project
        </Link>
    )}
    
    </>
    
  )
}

export default AddProject
