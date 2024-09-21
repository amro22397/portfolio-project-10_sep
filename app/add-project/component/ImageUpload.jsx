import React from 'react'

import { useFormState } from 'react-dom'
import uploadFile from '../actions'


const initialState = { message: null };

const ImageUpload = () => {

    const [state, formAction] = useFormState(uploadFile, initialState)

  return (
    <>
    <form action={formAction}>

<input id="file"
 type="file" name="file" accept='images/*' multiple
 className='bg-gray-400 border-2 border-black rounded-xl cursor-pointer
 bg-transparent border-none'/>
 
 <button type='submit'
className="p-3 text-white bg-green-600 hover:bg-green-700"
>
Upload
</button>

</form>

{state?.status && (
    <div className={`state-message ${state?.status}`}>
    {state?.message}
    </div>
)}

    </>
    
  )
}

export default ImageUpload
