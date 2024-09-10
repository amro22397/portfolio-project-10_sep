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

const about = {
  title: "About me",
  descripiton: 'I am a Full Stack Web Developer. I can design the frontend and the backend of the website. Also, I can use many tools and libraries to make the page looks good and responsive.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amro El-Mutasim"
    },
    {
      fieldName: "Phone Number",
      fieldValue: "+96879335801"
    },
    {
      fieldName: "Whatsapp Number",
      fieldValue: "+249995291772"
    },
    {
      fieldName: "Experience",
      fieldValue: "0-1 Year"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sudanese"
    },
    {
      fieldName: "Email",
      fieldValue: "amroalmutasim22@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },

    {
      fieldName: "Languages",
      fieldValue: "Arabic, English"
    },
  ] 
}

const experience = {
    items: false,
  }

  const education = {
    title: "My Education",
    descripiton: "",
    items: [

      {
        duration: "MAR 2024",
        degree: "Responsive Web Design Certification",
        institution: "Free Code Camp Website"
      },

      {
        duration: "MAR 2024",
        degree: "BIM Fundamentals Certification (Building Information Modeling) - Structure Design",
        institution: "Coursera Website - University Of Taiwan"
      },

      {
        duration: "FEB 2024",
        degree: "Learning AutoCAD 2024",
        institution: "LinkedIn Learning"
      },

      {
        duration: "FEB 2024",
        degree: "Learning Revit 2024",
        institution: "LinkedIn Learning"
      },

      {
        duration: "NOV 2014 - DEC 2021",
        degree: "Bachelor of Science (B.S.) in Civil Engineering",
        institution: "University Of Khartoum, Sudan"
      },
    ],
  }
  
;
const skills = {
  title: "My Skills",
  descripiton: 
  "I have many skills and able to use many tools and libraries that I will list below",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },

    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs"
    },
    {
      icon: <SiJquery />,
      name: "Jquery"
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js"
    },
    {
      icon: <SiExpress />,
      name: "Express"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <FaGitAlt />,
      name: "Git"
    },
    {
      icon: <SiGithub />,
      name: "Github"
    },
  ]
};

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
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue='experience'
        className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">

          <TabsContent value="experience" className="w-full">
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
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
                <p className="max-w-[600px] text-gray-800 text-md mx-auto xl:mx-0
                font-semibold">
                {skills.descripiton}
                </p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
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
              <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0">
              {about.descripiton}
              </p>

              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
              mx-auto xl:mx-0 mb-20">
                {about.info.map((item, index) => {
                  return (
                    <li key={index}
                    className='flex flex-col items-center justify-center xl:justify-start gap-4
                    border-b border-gray-600 pb-4 mx-2'>
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
