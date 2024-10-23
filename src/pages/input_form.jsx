import {FormImg} from '../components/form_img';
import {FormInput} from '../components/form';



export function Form(){

    return(
        <div className='flex flex-row h-screen'>
            <div className='h-full w-2.4/6'>
                <FormImg className='h-full'/>
            </div>
            <div className='h-full w-4/6 pt-10'>
                <div className='px-16 py-10'>
                    <FormInput className='h-full'/>
                </div>
            </div>
            

        </div>
    )
}