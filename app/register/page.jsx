import React from 'react'

const page = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    console.log(formData)
    
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-4'>create user</h1>

      <form className='gap-4 flex flex-col'>
        <label className='flex flex-row justify-between'>
            <span>User name:</span>
            <input onChange={handleChange} id="username"
            type="user name" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Email:</span>
            <input onChange={handleChange} id="email"
            type="user name" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Password:</span>
            <input onChange={handleChange} id="password"
             type="user name" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>
      </form>

      <button className='bg-yellow-700 text-white px-3 py-1 rounded-full my-4'
      >Create User</button>
    </div>
  )
}

export default page
