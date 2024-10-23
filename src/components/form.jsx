import react,{useState} from 'react';
import { useNavigate } from "react-router-dom";


export function FormInput(){
    const [image,setImage] = useState(null);
    const navigate = useNavigate();


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));
        }
    }

    return(
        <div className='flex flex-col'>
            <div className='mb-3'>
                <h2 className='text-5xl' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}}>Publish Items</h2>
            </div>
            <div>
                <div className="h-px bg-gray-300 w-full pt-10% mb-4"></div>
            </div>
            <div className='flex flex-col space-y-2 mb-4'>
                <p className='bold text-3xl' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}}>Item Name</p>
                <input className='rounded-full border border-gray-400 px-8 h-10' type="text"></input>
            </div>
            <div className='flex flex-col space-y-2 mb-4'>
                <p className='bold text-3xl' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}}>Price</p>
                <input className='rounded-full border border-gray-400 px-8 h-10' type="text"></input>
            </div>
            <div className='flex flex-col space-y-2 mb-4'>
                <p className='bold text-3xl' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}}>Description</p>
                <textarea row="5" className='rounded-full border border-gray-400 px-8 h-24' type="text"></textarea>
            </div>
            <div className='flex flex-col space-y-2 mb-4'>
                <p className='bold text-3xl' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}}>Upload Image</p>
                <div className="flex flex-row space-x-2">
                    <label className='cursor-pointer flex items-center px-4 py-3 bg-white border border-gray-400 rounded-full shadow-sm text-sm font-medium text-black hover:bg-gray-50 w-3/12 h-12'>
                        <input type="file" className='hidden' accept='image/*' onChange={handleImageUpload}/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        Choose Image
                    </label>
                    {image && (
                        <div className='w-40 h-40'>
                            <img src={image} alt="Uploaded Preview" className='object-cover w-full h-full rounded-lg shadow'/>
                        </div>
                        )
                    }
                </div> 
            </div>

            <div>
                <div className="h-px bg-gray-300 w-full pt-70%"></div>
            </div>

            <div className='flex flex-row justify-between mt-4'>
                <div>
                    <button className='bg-white text-black rounded-full px-4 py-2 border border-gray-400 hover:bg-gray-50' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}} onClick={() => navigate("/")}>Cancel</button>
                </div>

                <div>
                    <button className='bg-black text-white rounded-full hover:bg-gray-600 px-4 py-2 md:px-1.5rem hover:bg-gray-600' style={{ fontFamily: "'Rubik', sans-serif",fontOpticalSizing: 'auto',fontWeight: 400,fontStyle: 'normal'}} onClick={() => navigate("/")}>Publish</button>
                </div>
            </div>
        </div>
    )
}