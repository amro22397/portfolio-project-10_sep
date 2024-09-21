"use client"

import React, { useState, useEffect } from 'react'

import { useParams, useRouter } from 'next/navigation';
import { UploadButton } from "../utils/uploadthing";

import { useSession } from 'next-auth/react'
import { skills } from '../public/Constants';


const ProjectForm = ({project, id}) => {


    const [formData, setFormData] = useState({
        imageUrls: [],
        title: project ? project.title : '',
        description: project ? project.description : '',
        technologies: project ? project.technologies : '',
        link: project ? project.link : '',
        date: project ? project.date : '',
        category: project ? project.category : '',
    
    });

    const route = useRouter();
    const [images, setImages] = useState([]);
    let imagesStrings = [];

    useEffect(() => {
        if (project) {
            setFormData({
                ...formData, imageUrls: project.imageUrls
            })
        }
    }, [project]);

    console.log(formData)

    useEffect(() => {
        
      images.forEach(item => {
        imagesStrings.push(item.url)
        setFormData({
            ...formData, imageUrls: formData.imageUrls.concat(imagesStrings)
        })
      })
      console.log(imagesStrings)

    }, [images]);

    


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmitform = async (e) => {
        e.preventDefault();

        setLoading(true);

        if (formData.imageUrls.length < 1) {
            return setErrorMessage('You must enter at least one image!!');
          }

          if (id) {
            const data = { id: project._id, ...formData}

            const res = await fetch('/api/edit-project', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            setLoading(false)

            if (res.ok) {
                route.push('/projects')
            } else {
                console.log(res)
                setErrorMessage('Error adding project')
            }
            
          } else {
            const res = await fetch('/api/add-project', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });

              setLoading(false)

              if (res.ok) {
                route.push('/projects')
              } else {
                console.log(res)
                setErrorMessage('Error adding project')
              }

          }

          

        
    }

    const handleRemoveImage = (index) => {
      setFormData({
        ...formData,
        imageUrls: formData.imageUrls.filter((_, i) => i !== index),
      });
    };



    const session = useSession();
  console.log(session)

  if (session.status === 'unauthenticated') {
    return (
      <div className="text-center text-2xl font-bold">
        Only admin can access this page...
      </div>
    )
  }

    
  return (
    <div>
      <form onSubmit={handleSubmitform}id="form"
      className='gap-4 flex flex-col w-[550px]'>
        <label className='flex flex-row justify-between'>
            <span>Title:</span>
            <input defaultValue={project ? project.title : ''}
            onChange={handleChange} id="title"
            type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Description:</span>
            <textarea defaultValue={project ? project.description : ''}
             onChange={handleChange} id="description"
            className='bg-gray-400 border-2 border-black rounded-xl ml-4 px-2'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Technologies:</span>
            <input defaultValue={project ? project.technologies : ''}
            onChange={handleChange} id="technologies"
             type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <div className="">
            <label className='font-semibold'>These are the list of technologies that I learned:</label>
            <div className="grid grid-cols-8 gap-x-7 gap-y-2 mt-5 my-8">
            {skills.skillList.map(skill => {
                return (
                    <p className="flex flex-row " key={skill.name}>
                    {skill.name}
                    </p>
                )
            }
            )}
            </div>
        </div>

        <label className='flex flex-row justify-between'>
            <span>Web Link:</span>
            <input defaultValue={project ? project.link : ''}
            onChange={handleChange} id="link"
             type="text" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row justify-between'>
            <span>Date:</span>
            <input defaultValue={project ? project.date : ''}
            onChange={handleChange} id="date"
             type="date" className='bg-gray-400 border-2 border-black rounded-xl ml-4'/>
        </label>

        <label className='flex flex-row gap-5'>
            <span>Category:</span>
            
             <select defaultValue={project ? project.category : ''}
             onChange={handleChange}
             id="category" className='bg-gray-400 border-2 border-black rounded-xl ml-4 px-1'>
                <option>--</option>
                <option>Frontend</option>
                <option>Fullstack</option>
             </select>
            </label>

            <label className='flex flex-row justify-between'>
            <span>Images:</span>

            <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImages(res);


        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

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
          >{loading ? 'Saving...' : 'Save'}</button>

        
      </form>

      {errorMessage && (
        <p>{errorMessage}</p>
      )}




      {/* s3 image upload
      <form onSubmit={handleSubmit}>
        
        <input id="file"
        type="file" name="file" onChange={handleFileChange}
        className='bg-gray-400 border-2 border-black rounded-xl cursor-pointer
        bg-transparent border-none'/>
        
        <button type='submit'
        className="p-3 text-white bg-green-600 hover:bg-green-700">
          Upload
          </button>
          
          </form>

          {imageUrl && (
            <div>
              <p>Image</p>
              <Image src={imageUrl} alt='image' width={200}  height={200} />
            </div>
          )}

          {errorMessage && (
            <p>{errorMessage}</p>
          )}
          
          */}




      {/* 
      
       <div className=''>
      <div className=''{...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop file(s) here ...</p>
        ) : (
          <p>Drag and drop file(s) here, or click to select files</p>
        )}
      </div>
    </div>

    <div className=''>
        {selectedImages.length > 0 &&
          selectedImages.map((image, index) => (
            <img src={`${URL.createObjectURL(image)}`} key={index} alt=""
            className='w-10 h-10 object-cover object-center' />
          ))}
      </div>

      {selectedImages.length > 0 && (
        <div className=''>
          <button onClick={onUpload}
          className='bg-blue-600 px-3 py-1 text-white'>Upload to Cloudinary</button>
          <p>{uploadStatus}</p>
        </div>
      )}

      
      */}
     

    </div>
  )
}

export default ProjectForm
