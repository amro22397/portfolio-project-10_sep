
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";



  import Link from 'next/link';
  import Image from 'next/image';
  import exp from 'constants';
  

import { title } from 'process';

import { projects } from '../public/Constants';

import mongoose from 'mongoose'
import { Project } from "../models/project";


const ProjectsID = async ({ id }) => {

    mongoose.connect(process.env.MONGO_URL)

    const projectsArray = await Project.find()

    const project = projects[0];


  return (
    <div className="container flex flex-col max-xl:items-center justify-center mx-auto">

<div className="flex flex-col xl:flex-row xl:gap-[30px]
gap-12">



    <div className=" xl:h-[460px] flex flex-col
    mx-0 max-xl:mx-7 ">
        
        <Link href='/projects'
className='mb-5 text-md font-semibold flex flex-row items-center gap-1 text-black
cursor-pointer hover:underline'>

Back to projects

</Link>


        <div className='flex flex-col gap-5 h-[50%]'>


            <h2 className="text-[42px] font-bold leading-none text-black
            group-hover:text-gray-700 transition-all duration-500 capitalize
            mb-3">
                {project.title}
            </h2>

            <button className="bg-yellow-600 px-2 py-1 border-solid border-2 border-black
            w-[150px] text-white cursor-auto font-semibold">
            {project.category}
            </button>

            <p className="text-gray-700">{project.date}</p>


            <p className="text-gray-800 text-md
            " style={{fontFamily: 'sans-serif'}}>{project.description}</p>

            <div className="w-[95%] text-lg
             px-3 py-2 rounded-md">
                <span className='font-bold
                text-green-600'>{project.technologies}</span>
            </div>

            <ul className="flex gap-4"></ul>

            <div className="border border-black/20"></div>

            <div className='flex items-center gap-4'>

                {project.link.split(" ") == '' ? (
                    <></>
                ) : (
                    <Link href={project.link} target='_blank'
                >
                    <button className="bg-blue-700 text-white flex flex-row justify-center items-center gap-3
                    px-5 py-1 rounded-full hover:bg-blue-800 active:bg-blue-900">Visit the website <FaArrowRight
                    className='mt-[3px]' /></button>
                </Link>
                )}
                

                
            </div>
        </div>
    </div>

    
</div>
</div>
  )
}

export default ProjectsID
