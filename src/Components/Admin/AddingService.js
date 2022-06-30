import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddingService = () => {
    const { register, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://quiet-hamlet-08225.herokuapp.com/services', data).then(result => console.log(result));
    }


    return (

        <div className='grid item-center justify-items-center p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2-screen m-0 p-10 bg-white w-full tw-h-full shadow md:rounded-lg lg:w-2/4 lg:mx-auto">
                <h2 className="font-bold text-blue-700">Adding A New destination</h2>



                <div className="flex-col flex py-3">
                    
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("image")} placeholder="Image Url"  />

                </div>
                <div className="flex-col flex py-3">
                   
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("tittle")} placeholder="Tittle" required />

                </div>

                <div className="flex-col flex py-3">
                   
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("price")} placeholder="Price" required />
                </div>

                <div className="flex-col flex py-3">
                   
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("location")} placeholder="Location" required />
                </div>
                <div className="flex-col flex py-3">
                   
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("type")} placeholder="Type" required />
                </div>
                <div className="flex-col flex py-3">
                   
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("highlights")} placeholder="Highlights" required />
                </div>



                <button type='submit' className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300 rounded ">Add </button>






            </form>
        </div>

        





    
    );
};

export default AddingService;