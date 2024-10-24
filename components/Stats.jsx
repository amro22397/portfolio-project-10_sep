"use client"

import React from 'react'
import CountUp from 'react-countup'

import { projects } from '../public/Constants'
import { about, experience, education, skills } from '../public/Constants'
import { diff } from '../public/Constants'




const Stats = ({allProjects}) => {
    const stats = [
        {
            num: diff,
            text: "Years Of Experience",
        },
        
        {
            num: allProjects.length,
            text: "Projects completed",
        },
    
        {
            num: skills.skillList.length,
            text: "Technologies mastered",
        },
    
    ];
  return (
            <div className='md:grid flex flex-col gap-8 md:grid-cols-3 justify-center xl:max-w-none
            pt-8 pb-12 xl:pt-0 xl:pb-0'>
                {stats.map((item, index) => {
                    return (
                        <div className='flex gap-4 items-center justify-center
                        xl:justify-center mx-auto'
                        key={index}>

                            <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className='text-4xl xl:text-6xl font-extrabold'
                            />

                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                            leading-sung text-black text-2xl font-semibold px-2`} >
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
  )
}

export default Stats
