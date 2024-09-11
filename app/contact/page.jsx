'use client'

import React from 'react'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel,
  SelectTrigger } from '../../components/ui/select'

  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+968 79335801"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "amroalmutasim22@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Alshifa Street, AlMawalih South, Oman"
    },
  ];

  import { motion } from 'framer-motion';
import { SelectValue } from '@radix-ui/react-select'

const page = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className='py-6'
    >
      <div className="containter mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-orange-400">Let's work together</h3>
              <p className="text-white/60">
              I'm happy to get request for web designs and I will make it as soon as I can...
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type='firstname' placeholder="First Name" />
                <Input type='lastname' placeholder="Last Name" />
                <Input type='email' placeholder="Email address" />
                <Input type='phone' placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est" >Frontend Development</SelectItem>
                    <SelectItem value="cst" >Backend Development</SelectItem>
                    <SelectItem value="mst" >Full Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea 
              className="h-[200px]"
              placeholder="Type your message here..."
              />

              <Button size="md" className="max-w-40 py-2 bg-orange-600 hover:bg-orange-700
              active:bg-amber-800 text-white">
                Send message
              </Button>
            </form>
          </div>

          <div className="flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0 mx-auto">
            <ul className=''>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex flex-row gap-3 my-12'>

                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                    bg-[#27272c] text-white rounded-md flex items-center
                    justify-center'>
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-black font-semibold">{item.title}</p>
                      <h3 className="">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default page
