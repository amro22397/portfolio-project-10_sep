"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Food Delievery App",
    description: "A website for a restaurant which help them showing their menu and let customers order from them online..",
    technologies: "Html, CSS, JavaScript, Tailwind CSS and React",
    image: '/assets/1.png',
    live: "https://food-delivery-app-react-wheat.vercel.app/",
    date: "Sunday, June 2024"

  },

  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description: "",
    technologies: "",
    image: '/',
    live: "/"

  },

  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description: "",
    technologies: "",
    image: '/',
    live: "/"

  },
]

const page = () => {
    const [project, setProject] = useState(projects[0]);
    

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }

    

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px] justify-start items-start
            gap-12">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                xl:justify-between ">
                    <div className='flex flex-col gap-5 h-[50%]'>

                        <div className="text-8xl leading-none font-extrabold text-transparent
                        text-outline">
                            {project.num}
                        </div>

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


                        <p className="text-gray-800">{project.description}</p>

                        <ul className="flex gap-4"></ul>

                        <div className="border border-black/20"></div>

                        <div className='flex items-center gap-4'>

                            <Link href={project.live} target='_blank'
                            >
                                <button className="bg-blue-700 text-white flex flex-row justify-center items-center gap-3
                                px-3 py-1 rounded-full hover:bg-blue-800 active:bg-blue-900">Visit the project <FaArrowRight /></button>
                            </Link>

                            <Link href='#'>

                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full xl:w-[50%]">
                    <Swiper
                    spaceBetween={30}
                    slidePerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >

                        {projects.map((project, index) => {
                            return (
                            <SwiperSlide key={index} className='w-full'>
                                <div className="h-[460px] relative group flex justify-center items-center
                                max-sm:h-[250px] max-md:h-[320px] max-lg:h-[390px]
                                bg-pink-50/20">
                                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                                    </div>

                                    <div className="relative w-full h-full">
                                        <Image 
                                        src={project.image}
                                        fill
                                        className='object-fill'
                                        alt=""
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

export default page
