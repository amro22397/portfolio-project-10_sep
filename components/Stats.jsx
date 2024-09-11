"use client"

import React from 'react'
import CountUp from 'react-countup'

import { projects } from '../public/Constants'
import { about, experience, education, skills } from '../public/Constants'

var dPast = 'April 1, 2024';
var d1 = new Date();
var d2 = new Date(dPast);
var dCalc = Math.abs((d1-d2)/31556952000);   // difference in milliseconds
var diff = Math.ceil(10 * dCalc)/10;

const stats = [
    {
        num: diff,
        text: "Years Of Experience",
    },
    
    {
        num: projects.length,
        text: "Projects completed",
    },

    {
        num: skills.skillList.length,
        text: "Technologies mastered",
    },

];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item, index) => {
                    return (
                        <div className='flex-1 flex gap-4 items-center justify-center
                        xl:justify-start'
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
        </div>
    </section>
  )
}

export default Stats
