'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const EditDeleteButtons = ({id}) => {

    const route = useRouter();

    const handleProjectDelete = async () => {
        const result = confirm('Are you sure you want to delete this project?')

        if (!result) return

        
            const res = await fetch('/api/projects?_id='+id, {
                method: 'DELETE'
            });

            if (res.ok) {
                route.push('/projects');
            } else {
                alert('Error deleting')
                console.log(res)
            }

            const path = window.location.pathname;
        console.log(path)

        if (path !== `/projects/${id}`) {
            window.location.reload();
        }
        }


        const session = useSession();
        

  return (
    <>
    {session.status === 'authenticated' && (
        <div className="flex flex-row gap-7
        mr-[6px]">


        <Link href={'/edit-project/'+id}
        className='text-green-600 text-xl font-bold'
        >Edit</Link>

        <button onClick={handleProjectDelete}
        className='text-red-600 text-xl font-bold'>
            Delete
        </button>
    </div>
    )}

    </>
  )
}

export default EditDeleteButtons
