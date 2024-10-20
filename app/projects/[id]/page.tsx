
/* import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useSession } from 'next-auth/react' 
import "swiper/css"; */

import SwiperImage from '../../../components/SwiperImage'
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";



  import Link from 'next/link';
  import Image from 'next/image';
  import WorkSliderBtns from '../../../components/WorkSliderBtns';
  import exp from 'constants';
  

import { title } from 'process';

import { projects } from '../../../public/Constants';

import { useParams, usePathname } from 'next/navigation';
import mongoose from "mongoose";
import { Project } from "../../../models/project";

import EditDeleteButtons from '../../../components/EditDeleteButtons'



type PageProps = {
    params: {
        id: string;
    }
};

export default async function page(props: PageProps) {
    const id = props.params.id

    mongoose.connect(process.env.MONGO_URL)

    const project = await Project.findById({_id: id})

    console.log(project)

  return (
        


        <div className="container flex flex-col max-xl:items-center justify-center mx-auto
        mt-9 mb-40">


            <div className="flex flex-col xl:flex-row xl:gap-[30px]
            gap-12">

                <pre className='hidden'>{JSON.stringify(project, null, 2)}</pre>

                <div className=" xl:h-[460px] flex flex-col
                mx-0 max-xl:mx-7 ">
                    

                    <div className=" flex flex-row items-center justify-between
                    mb-10 max-xl:mt-4">
               <Link href='/projects' >
                    <button className='bg-yellow-500 px-4 py-[4px] text-orange-800 rounded-sm
                font-semibold hover:bg-yellow-400 active:bg-yellow-300 transition-all duration-100
                flex flex-row items-center gap-2'>
                    <i className="fa-solid fa-arrow-left
                    mt-[2px]"></i>
                    Back to projects
                    </button>
                    </Link>

                    <EditDeleteButtons id={id}/>


                    </div>
        


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


                        <p className="text-gray-800 text-md whitespace-pre-line
                        " style={{fontFamily: 'sans-serif'}}>{project.description}</p>
                        
                        <div className="flex flex-wrap gap-6
                        text-md font-semibold mt-2">
                            {project.technologiesArray.map((tech, index) => (
                                <span 
                                key={index} className="bg-gray-300 px-4 py-[2.5px] rounded-full
                                text-gray-800 hover:transform hover:scale-110 cursor-default transition-all duration-50
                                hover:text-gray-900"
                                >{tech}</span>
                            ))}
                        </div>

                        {/*
                        <div className="w-[95%] text-lg
                         px-3 py-2 rounded-md">
                            <span className='font-bold
                            text-green-600 hidden'>{project.technologies}</span>
                        </div>
                        */}
                        

                        

                        <ul className="flex gap-4"></ul>

                        <div className="border border-black/20"></div>

                        <div className='flex items-center gap-4'>

                            
                                {project.link.trim(" ") === "" ? (
                                    <></>
                                ): (
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

                <SwiperImage project={project} />
            </div>

            

        </div>
    
  )
}
