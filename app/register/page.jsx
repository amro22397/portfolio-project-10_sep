"use client"

import React, { useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({});
    console.log(formData)
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (res.ok) {
            setError(false)
            setUserCreated(true)
          } else {
            setError(true)
            console.log(error)
            setUserCreated(false)
          }
          setLoading(false)
    }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-4'>create user</h1>

      <form onSubmit={handleSubmit}
      className='gap-4 flex flex-col'>
        <label className='flex flex-row justify-between'>
            <span>User name:</span>
            <input onChange={handleChange} id="username"
            type="name" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

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
      >{loading ? 'Creating...' : 'Create User'}</button>

      {userCreated && (
        <p>User created successfully</p>
      )}
      </form>

      
    </div>
  )
}

export default page
