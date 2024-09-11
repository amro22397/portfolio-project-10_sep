"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css";

import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";



  import Link from 'next/link';
  import Image from 'next/image';
  import WorkSliderBtns from '../../../components/WorkSliderBtns';
  import exp from 'constants';
  

import { useSession } from 'next-auth/react' 
import { title } from 'process';

import { projects } from '../../../public/Constants';

import { useParams, usePathname } from 'next/navigation';

export default function page() {

    const { id } = useParams();

    const session = useSession();

    const [project, setProject] = useState(projects[0]);


   useEffect(() => {
    const item = projects.find(item => item.id === Number(id));
    setProject(item);
   }, []);

   console.log(project)

   


    //const fetchProjects = async () => {
        //try {
          //    const res = await fetch('http://localhost:3000/api/projects', {
            //cache: 'no-store'
       // });

        // const data = await res.json();
    
        // if (!res.ok) {
           // throw new Error('Failed to fetch projects');
        //}
        
        //} catch (error) {
          //  console.log(error)
   //     }
    
    
   // };

   // useEffect(() => {
     //   fetchProjects();
   // }, [])

   


  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
        


        <div className="container mx-auto">

        <Link href='/projects'>
        <p className='mb-5 text-md font-semibold flex flex-row items-center gap-1 text-gray-500
        cursor-pointer hover:text-gray-700'><i class="fa-solid fa-arrow-left mt-[3px]"></i> Back to projects</p>
        </Link>

            <div className="flex flex-col xl:flex-row xl:gap-[30px] justify-start items-start
            gap-12">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                xl:justify-between ">
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

                <div className="w-full xl:w-[50%]">
                    <Swiper
                    navigation
                    pagination
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidePerView={1}
                    className="xl:h-[520px] mb-12"
                    >

                        {project.imageUrls.map((image, index) => {
                            return (
                            <SwiperSlide key={index} className='w-full'>
                                <div className="h-[460px] relative group flex justify-center items-center
                                max-sm:h-[250px] max-md:h-[320px] max-lg:h-[390px]
                                bg-pink-50/20">
                                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                                    </div>

                                    <div className="relative w-full h-full">
                                        <Image 
                                        src={image.src}
                                        fill
                                        className='object-fill'
                                        alt={image.alt}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            );
                        })}

                        <WorkSliderBtns 
                        containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                        xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-end
                        '
                        btnStyles="bg-gray-700 hover:bg-white-hover text-gray-800 text-[22px]
                        w-[44px] h-[44px] flex justify-center items-center transition-all
                        bg-gray-600 text-white hover:bg-gray-700 border border-black"
                        />
                        
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>
  )
}
