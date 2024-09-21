'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AddProject = () => {

    const session = useSession();

  return (
    <>
    {session.status === 'authenticated' && (
        <Link href="/add-project">
        <button className='bg-yellow-500 px-4 py-[6px] text-whites rounded-sm
        border-2 border-black
        font-semibold hover:bg-yellow-400 active:bg-yellow-300 transition-all duration-500'
    >Add Project</button>
        </Link>
    )}
    
    </>
    
  )
}

export default AddProject
