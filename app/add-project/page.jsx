"use client"

import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { useRouter } from 'next/navigation';


const page = () => {
    const [formData, setFormData] = useState({
        imageUrls: [],
        title: '',
        description: '',
        technologies: '',
        link: '',
        date: '',
        category: '',
    
    });

    const route = useRouter();
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [dataCreated, setDataCreated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const res = await fetch('/api/add-project', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          setLoading(false)

          if (res.ok) {
            setError(false)
          } else {
            setError(true)
            console.log(error)
          }

          route.push('/projects')
    }

    const [files, setFiles] = useState({});
    const [uploading, setUploading] = useState(false);
    const [imageUploadError, setImageUploadError] = useState(false)
    const [imageUploading, setImageUploading] = useState(false);
    const [imageError, setImageError] = useState(false);
    

    const handleImageSubmit = (e) => {
        setImageUploading(true);
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      const promises = [];

      for (let i=0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises).then((urls) => {
        setFormData({ ...formData , imageUrls: formData.imageUrls.concat(urls) });
        setImageUploadError(false);
        setImageUploading(false)
      }).catch((err) => {
        setImageUploadError('Image upload failed - 2mb max')
        setImageUploading(false)
      }); 
    } else {
      setImageUploadError('only upload 6 images for listing')
      setImageUploading(false)
    }
  };

  const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage(app);
          const fileName = new Date().getTime() + file.name;
          const storageRef = ref(storage, fileName);
          const uploadTask = uploadBytesResumable(storageRef, file);
          
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Upload is ${progress}%`);
  },
      (error) => {
    reject(error);
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
      resolve(downloadURL)
    )
  }
        )
      })
    }

    const handleRemoveImage = (index) => {
        setFormData({
          ...formData,
          imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        });
      };

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='mb-4'>Add project</h1>

      <form onSubmit={handleSubmit} id="form"
      className='gap-4 flex flex-col w-[550px]'>
        <label className='flex flex-row justify-between'>
            <span>Title:</span>
            <input onChange={handleChange} id="title"
            type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Description:</span>
            <textarea onChange={handleChange} id="description"
            className='bg-gray-400 border-2 border-black rounded-xl ml-4 px-2'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Technologies:</span>
            <input onChange={handleChange} id="technologies"
             type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Web Link:</span>
            <input onChange={handleChange} id="link"
             type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Date:</span>
            <input onChange={handleChange} id="date"
             type="date" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row gap-5'>
            <span>Category:</span>
            
             <select onChange={handleChange}
             id="category" className='bg-gray-400 border-2 border-black rounded-xl ml-4 px-1'>
                <option>--</option>
                <option>Frontend</option>
                <option>Fullstack</option>
             </select>
            </label>

            <label className='flex flex-row justify-between'>
            <span>Images:</span>
            <input onChange={(e) => setFiles(e.target.files)} id="images"
             type="file" accept='image/*' multiple
             className='bg-gray-400 border-2 border-black rounded-xl cursor-pointer
             bg-transparent border-none'/>
             
             <button onClick={handleImageSubmit} type='button'
          className="p-3 text-white bg-green-600 hover:bg-green-700
          disabled:opacity-80 rounded-md" disabled={uploading}>
            {imageUploading ? 'Uploading...' : "Upload"}
          </button>

        </label>

        {formData.imageUrls.length > 0 &&
        formData.imageUrls.map((url, index) => (
          <div key={url} className='flex justify-between py-0'>
            <img src={url} alt="listing-image"
            className='w-20 h-20 object-contain rounded-lg'/>

            <button className='bg-red-600 px-2 py-0 text-white'
            type='button' onClick={() => {handleRemoveImage(index)}}
            >Delete</button>
          </div>
        ))
        }

        <button type='submit'
        className='bg-yellow-700 text-white px-3 py-1 rounded-full my-4'
      >{loading ? 'adding...' : 'Add project'}</button>

      {dataCreated && (
        <p>Project is Added Successfully</p>
      )}
      </form>

      
    </div>
  )
}

export default page
