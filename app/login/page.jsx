"use client"

import React, { useState } from 'react'
import {signIn} from "next-auth/react";


const page = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const [formData, setFormData] = useState({});

    console.log({...formData})
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await signIn('credentials', {...formData, callbackUrl: '/'});
        setLoading(false);
    }

    const handleChange = async (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        })
    }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-4'>login</h1>

      <form onSubmit={handleSubmit}
      className='gap-4 flex flex-col'>

        <label className='flex flex-row justify-between'>
            <span>Email:</span>
            <input onChange={handleChange} id="email"
            type="email" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Password:</span>
            <input onChange={handleChange} id="password"
             type="password" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <button type='submit'
        className='bg-yellow-700 text-white px-3 py-1 rounded-full my-4'
      >{loading ? 'Logining...' : 'Login'}</button>

      </form>

      <button type='button' onClick={() => signIn('google', {callbackUrl: '/'})}
                className='flex gap-3 justify-center items-center
                bg-red-500 text-white px-10 py-1 rounded-full'>
                    Login with google
                </button>

    </div>
  )
}

export default page
