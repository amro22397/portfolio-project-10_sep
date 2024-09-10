import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi' 
import React from 'react'
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'


const page = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
         xl:pt-8 xl:pb-24">
          <div className="flex flex-col gap-7 text-center xl:text-left order-2 xl:order-none
          ml-20 max-xl:ml-0">
            <h1 className="text-6xl font-semibold flex flex-col max-xl:hidden">
              Hello I am ...
            </h1>
            <span className='text-red-700 text-5xl'>
                
                Amro El-Mutasim</span>

            <span className='text-gray-600 text-3xl'>Full Stack Web Developer</span>
            

            <div className="flex flex-col xl:items-start justify-center gap-6 mt-2
            items-center">    
              
              <Button 
              variant='outline'
              size='lg'
              className="uppercase flex items-center gap-2"
              href="/resume"
              >
                <a href="/resume.pdf">Download CV</a>
                <FiDownload cassName='text-xl' />
              </Button>

              <div className=' xl:hidden
              xl:mb-0 mt-1 mb-8'>
                <Social
                containerStyles="flex gap-4"
                iconStyles='text-4xl flex
                justify-center items-center hover:transform hover:scale-110
                hover:transition-all duration-500'
                />

              </div>
                        
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
          <Photo />
          </div>

        </div>

      </div>
      <Stats />
    </section>
  )
}

export default page
