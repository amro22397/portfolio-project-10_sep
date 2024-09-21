import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";



  import Link from 'next/link';
  import Image from 'next/image';
  import exp from 'constants';
  

import { title } from 'process';

import { projects } from '../public/Constants';

import mongoose from 'mongoose'
import { Project } from "../models/project";


const projectsID = async ({id}) => {

    mongoose.connect(process.env.MONGO_URL)

    const project = await Project.findById({_id: id});




  return (
    <div className=""></div>
  )
}

export default projectsID
