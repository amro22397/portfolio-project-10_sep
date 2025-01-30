import mongoose from "mongoose";
import ProjectForm from "../../../components/ProjectForm";
import { Project } from "../../../models/project";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

type PageProps = {
  params: {
    id: string;
  };
};

const page = async (pageProps: PageProps) => {
  const id = pageProps.params.id;

  mongoose.connect(process.env.MONGO_URL);

  const project = await Project.findById({ _id: id });

  revalidatePath("/");

  // AWS S3 upload
  /*

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const uploadToS3 = async (file) => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACESSS_KEY,
    });

    const params = {
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
      Key: file.name,
      Body: file,
      ACL: 'public-read',
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.log('Error', error);
    throw new Error('Failed upload')
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setErrorMessage('Please select a file');
      return;
    }

    try {
      const imageUrl = await uploadToS3(selectedFile);
      setImageUrl(imageUrl);
    } catch (error) {
      console.log(error)
    }
  } 

  console.log(selectedFile)

    // AWS S3 upload
*/

  // cloudinary multiple upload images
  /*
   const [selectedImages, setSelectedImages] = useState([]);
   const [uploadStatus, setUploadStatus] = useState("");

 const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
   acceptedFiles.forEach((file) => {
     setSelectedImages((prevState) => [...prevState, file]);
   });
 }, []);

 const {
   getRootProps,
   getInputProps,
   isDragActive,
   isDragAccept,
   isDragReject,
 } = useDropzone({ onDrop });

 const onUpload = async () => {
   setUploadStatus("Uploading....");
   const formData = new FormData();
   selectedImages.forEach((image) => {
     formData.append("file", image);
   });
   try {
     const response = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
     });
     console.log(response.data);
     setUploadStatus("upload successful");
   } catch (error) {
     console.log("imageUpload" + error);
     setUploadStatus("Upload failed..");
   }
};

*/
  // cloudinary multiple upload images

  /* firebase upload
    const [uploading, setUploading] = useState(false);
    const [imageUploadError, setImageUploadError] = useState(false)
    const [imageUploading, setImageUploading] = useState(false);
    const [imageError, setImageError] = useState(false);

    const [url, setUrl] = useState('');

    
    /* const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        }
      })
    } */

  /* const data = new FormData();
      data.append('files', files[0]);
      data.append('upload_preset', 'vxam2hsq');

      const res = await fetch(`https://api.cloudinary.com/v1_1/dqxwmu28k/image/upload`, {
        method: 'POST',
        body: data
      });

      

      setImages(file.secure_url)
      console.log(images) 
    } */

  const session = (await getServerSession(authOptions)) as any;
  console.log(session?.user?.email);

  if (
    session.status === "unauthenticated" ||
    session?.user?.email !== "amroalmutasim22@gmail.com"
  ) {
    return (
      <div className="text-center text-2xl font-bold">
        Only admin can access this page...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      
      <Link
        href="/projects"
        className="mb-5 flex flex-row justify-start items-start content-start"
      >
        <button
          className="bg-yellow-500 px-4 py-[6px] text-whites rounded-sm
                border-2 border-black
                font-semibold hover:bg-yellow-400 active:bg-yellow-700 transition-all duration-500"
        >
          Back to projects
        </button>
      </Link>

      <h1 className="mb-4 text-2xl font-bold">Edit project</h1>

      <ProjectForm project={project} id={id} />
    </div>
  );
};

export default page;
