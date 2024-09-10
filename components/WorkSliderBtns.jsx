"use client"

import React from 'react'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button onClick={() => swiper.slidePrev()}
         className={btnStyles}>
            <PiCaretLeftBold className={iconStyles} />
        </button>

        <button className='cursor-auto xl:bg-gray-400 px-3 xl:border
        xl:text-white text-white/80 font-semibold'>
          swipe between projects
        </button>

        <button onClick={() => swiper.slideNext()}
        className={btnStyles}>
            <PiCaretRightBold className={iconStyles} />
        </button>

      
    </div>
  )
}

export default WorkSliderBtns
