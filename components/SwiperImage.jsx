
'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css";

import Image from 'next/image';
  import WorkSliderBtns from '../components/WorkSliderBtns';
  import exp from 'constants';
  


const SwiperImage = ({project}) => {
  return (
    <div className="w-[98vw] xl:w-[50%] justify-center items-center">
    <Swiper
    navigation
    pagination
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidePerView={1}
    className="xl:h-[520px] mb-12"
    >
      <></>
      {project.youtubeLink &&project.youtubeLink.trim(' ') !== "" && (
        <SwiperSlide className='w-full'>
        <iframe width="560" height="315" src={project.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
        className='w-full h-[460px] max-lg:h-[315px]'></iframe>
        </SwiperSlide>
      )}

        {project.imageUrls.map((image, index) => {
            return (
            <SwiperSlide key={index} className='w-full'>
                <div className="h-[460px] relative group flex justify-center items-center
                max-sm:h-[300px] max-md:h-[380px] max-lg:h-[450px]
                
                bg-pink-50/20">
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>

                    <div id='project-image' 
                    className="relative w-full h-full
                    mx-auto
                    ">
                        <Image 
                        src={image}
                        fill
                        className='object-fill mx-auto
                        '
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
  )
}

export default SwiperImage
