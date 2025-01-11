import Link from 'next/link'
import React from 'react'

import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp  } from 'react-icons/fa'
import { FaSquareUpwork } from "react-icons/fa6";


const socials = [
  { icon: 'FaLinkedin', path: "https://www.linkedin.com/in/amro97/" },
    { icon: 'FaFacebook', path: "https://www.facebook.com/amro97/" },
    { icon: 'FaWhatsapp', path: "http://wa.me/+249995291772" },
    { icon: 'FaYoutube', path: "https://www.youtube.com/@AmroAlmutasim/videos" },
    { icon: 'FaSquareUpwork', path: "https://www.upwork.com/freelancers/~01a0eb164053da3046" },
]


const Social = ({ containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      <Link href={socials[0].path} target="_blank">
      <FaLinkedin className={`${iconStyles} text-blue-700 dark:text-white`} />
      </Link>

      <Link href={socials[1].path} target="_blank">
      <FaFacebook className={`${iconStyles} text-blue-600 dark:text-white`} />
      </Link>

      <Link href={socials[2].path} target="_blank">
      <FaWhatsapp className={`${iconStyles} text-green-600 dark:text-white`} />
      </Link>

      <Link href={socials[3].path} target="_blank">
      <FaYoutube className={`${iconStyles} text-red-600 dark:text-white`} />
      </Link>

      <Link href={socials[4].path} target="_blank">
      <FaSquareUpwork className={`${iconStyles} text-green-600 dark:text-white`} />
      </Link>
    </div>
  )
}

export default Social
