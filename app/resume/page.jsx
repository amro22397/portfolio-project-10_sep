"use client"
import React from 'react'

import './page.css'

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJquery } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss, SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

import { about, experience, education, skills } from '../../public/Constants'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip'

import { ScrollArea } from '../../components/ui/scroll-area';

import { motion } from 'framer-motion';

const page = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0
      max-xl:max-w-[90vw] mx-auto'
    >
      <div className="container mx-auto"> 
        <Tabs 
        defaultValue='education'
        className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
          <TabsTrigger value="experience" className="hidden">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">

          <TabsContent value="experience" className="w-full hidden">
          {!experience.items && (
                  <div className="mt-6 text-center text-xl font-semibold">
                    There is no work experience yet....
                  </div>
          )}

            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.descripiton}
              </p>

              <ScrollArea className='h-[400px]'>
                
                {experience.items.length > 0 && (
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index}
                      className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-white'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-gray-700'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                )}
                
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            {education.items === 0 && (
                  <div className="mt-6 text-center text-xl font-semibold">
                    There is no Education yet....
                  </div>
          )}
          
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-gray-800 dark:text-slate-200 mx-auto xl:mx-0">
              {education.descripiton}
              </p>

              <ScrollArea className='h-[400px]'>
                
                {education.items.length > 0 && (
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index}
                      className='bg-[#232329] py-6 px-10 rounded-xl
                      flex flex-col justify-start items-center lg:items-start gap-1'
                      >
                        <span id='item-duration'
                        >{item.duration}</span>

                        <h3 id="item-name"
                        className='text-xl max-w-[260px]
                        text-center lg:text-left'>{item.degree}</h3>

                        <div className='flex items-center gap-3'>
                          <span  
                          className='w-[6px] h-[6px] rounded-full'></span>

                          <p id="item-company"
                          className='text-white/60'>{item.institution}</p>
                        </div>

                        
                        <a href={item.certificateDownload} target='_blank' className="text-red-600 hover:text-white px-2 py-0 mt-2
                        hover:underline cursor-pointer">Download Certificate</a>
                        
                        {item.englishTranslation && (
                          <a href={item.englishTranslation} target='_blank' className="text-red-600 hover:text-white px-2 py-0 mt-2
                          hover:underline cursor-pointer">Download English Translation</a>
                        )}

                      </li>
                    )
                  })}
                </ul>
                )}
                
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-gray-800 dark:text-slate-200 text-md mx-auto xl:mx-0
                font-semibold">
                {skills.descripiton}
                </p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
              lg:grid-cols-5 xl:grid-cols-4
              xl:gap-[30px] mb-20'>
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger id="skill-div"
                          className='w-full h-[150px] bg-[#232329]
                          rounded-xl flex flex-col justify-center items-center group
                          cursor-auto'>
                            <div id="skill-icon"
                            className="text-6xl transition-all duration-300
                            text-white">
                              {skill.icon}
                            </div>
                            <p id="skill-text"
                            className='text-md text-white mt-2 font-semibold
                            '>{skill.name}</p>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                  </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-gray-800 dark:text-slate-200 mx-auto xl:mx-0">
              {about.descripiton}
              </p>

              <ul className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2
              max-xl:grid-cols-2
              xl:grid-cols-2 gap-y-6 max-w-[620px]
              mx-auto xl:mx-0 mb-20">
                {about.info.map((item, index) => {
                  return (
                    <li key={index}
                    className='flex flex-col items-center justify-center xl:justify-start gap-4
                    border-b border-gray-600 pb-4 mx-2 '>
                      <span className="">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
        </Tabs>
        
      </div>
    </motion.div>
  )
}

export default page
