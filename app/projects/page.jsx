"use client"
import React, { useState } from 'react'

import './page.css'

import { motion } from 'framer-motion' 

import { FaArrowRight } from "react-icons/fa";

import { projects } from '../../public/Constants';
import Link from 'next/link';

import { useSession } from 'next-auth/react' 


const page = () => {

    const [category, setCategory] = useState('All');

    const session = useSession();
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='flex items-center justify-center py-2 xl:py-0'
    >  
    <div className="container mx-auto">

    {session.status === 'authenticated' && (
            <div className="">
                <Link href="/add-project">
                <button className='hover:underline font-semibold'
            >Add Project</button>
                </Link>
        </div>
        )}

        
       <div className="flex-row justify-start gap-7 items-center
       text-xl hidden" style={{fontFamily: "sans-serif"}}>
            <span>Filter:</span>

            <div className="flex flex-row gap-5">

            <div onClick={() => setCategory('All')}
             className="bg-yellow-600 px-3 py-1 font-sans text-white rounded-xl cursor-pointer
            text-2xl transform hover:scale-105 hover:transition-all duration-500
            ">
                All
            </div>

            <div onClick={() => setCategory('Frontend')}
             className="bg-yellow-600 px-3 py-1 font-sans text-white rounded-xl cursor-pointer
            text-2xl transform hover:scale-105 hover:transition-all duration-500
            ">
                Frontend
            </div>

            <div onClick={() => setCategory('Fullstack')}
            className="bg-yellow-600 px-3 py-1 font-sans text-white rounded-xl cursor-pointer
            text-2xl transform hover:scale-105 hover:transition-all duration-500
            ">
                Fullstack
            </div>
        </div>
            
        </div>




        <div className="grid grid-cols-3 gap-7 mt-10
        max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-2">

            {projects.length > 0 && projects.map((project, index) => (
                <Link href={`/projects/${project.id}`}>
                 <div key={index} className="flex flex-col justify-start items-center
                bg-gray-800/80 gap-3 shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
                cursor-pointer" id="project-card">
                    
                    <img src={project.imageUrls[0].src} alt={project.title}
                    className='w-full h-56 object-fill' />

                    <h2 className="text-2xl font-semibold text-orange-400">{project.title}</h2>

                    <button className="bg-yellow-600 px-2 py-0 border-solid
                        w-[150px] text-white cursor-auto font-semibold">
                        {project.category}
                        </button>

                    <div className="flex flex-col justify-between items-center
                     mb-4 gap-4 px-6 py-2">

                        <p className="text-sm text-white" style={{fontFamily: "sans-serif"}}>{project.description}</p>

                    
                    </div>

                    
                </div>
                </Link>
               
            ))}
        </div>
    </div>
        
      
    </motion.div>
  )
}

export default page
