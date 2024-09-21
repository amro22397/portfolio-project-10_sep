import React from 'react'
import './page.css'
import Link from 'next/link';
import mongoose from 'mongoose';
import { Project } from '../../models/project';
import AddProject from '../../components/AddProject'


const page = async () => {

    mongoose.connect(process.env.MONGO_URL)

    const projects = await Project.find({}, {}, {sort: {createdAt: -1}})

  return (
     
    <div className="container mx-auto">

        
            
                <AddProject />
        

        
       <div className="flex-row justify-start gap-7 items-center
       text-xl hidden" style={{fontFamily: "sans-serif"}}>
            <span>Filter:</span>

            <div className="flex flex-row gap-5">

            <div
             className="bg-yellow-600 px-3 py-1 font-sans text-white rounded-xl cursor-pointer
            text-2xl transform hover:scale-105 hover:transition-all duration-500
            ">
                All
            </div>

            <div
             className="bg-yellow-600 px-3 py-1 font-sans text-white rounded-xl cursor-pointer
            text-2xl transform hover:scale-105 hover:transition-all duration-500
            ">
                Frontend
            </div>

            <div
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
                <Link href={`/projects/${project._id}`}>
                 <div key={index} className="flex flex-col justify-start items-center
                bg-gray-800/80 gap-3 shadow-lg mb-3 transform hover:scale-[1.01] transition-all duration-300 ease-in-out
                cursor-pointer h-[425px]" id="project-card">
                    
                    <img src={project.imageUrls[0]} alt={project.title}
                    className='w-full h-56 object-fill' />

                    <h2 className="text-2xl font-semibold text-orange-400">{project.title}</h2>

                    <button className="bg-yellow-600 px-2 py-0 border-solid
                        w-[150px] text-white cursor-auto font-semibold">
                        {project.category}
                        </button>

                    <div className="flex flex-col justify-between items-center
                     mb-4 gap-4 px-6 py-2 overflow-hidden hover:overflow-auto">

                        <p className="text-sm text-white
                        " style={{fontFamily: "sans-serif"}}>{project.description}</p>

                    
                    </div>

                    
                </div>
                </Link>
               
            ))}
        </div>
    </div>
        
  )
}

export default page
