import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const history = useHistory()
    const { user } = useAuth();
    const email = user.email;
    const { id } = useParams();
    const url = `https://quiet-hamlet-08225.herokuapp.com/services/${id}`;
    const [select, setSelect] = useState({});

    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(url).then(data => setSelect(data.data)).catch(error => setError(error));

    }, [url])
    const { tittle, image, location, type, highlights,} = select;
    console.log(error);
    console.log(select);




    const { register, handleSubmit, } = useForm();


    const onSubmit = data => {
        data.serviceID = id
        data.status = 'Pending'
        data.image = image;
        

        axios.post('https://quiet-hamlet-08225.herokuapp.com/booking', data)
        history.push("/profile")

    }





    return (



        <div className="md:p-12 bg-indigo-100 flex flex-col flex-wrap lg:flex-row ">
            <div className='p-8 lg:w-2/4 md:w-2/4 md:p-5 lg:p-5'>
                <h1 className='text-blue-700 text-bold uppercase'>You select this destination</h1>
                <h3 className='mb-4 text-bold'> Hope you have a good jorney</h3>
                 
                <div className="w-full bg-blue-300 rounded sahdow-lg flex flex-col  lg:flex-row sm:flex-col items-center">
                    <div className="w-full lg:w-2/4  lg:h-80">
                        <img className="object-center object-cover rounded  h-full w-full lg:h-full lg:w-full" src={image} alt={`thi sis a card images`} />

                    </div>
                    <div className="text-center  text-xs  w-full p-4 h-full px-2 lg:w-2/4 lg:h-full overflow-hidden lg:text-sm bg-blue-300 lg:mx-4">
                        <p className=" text-white  mb-1 max-w-xs	">{tittle}</p>
                        <h4 className=""><span>$</span> </h4>
                        <p>{location}</p>
                        <p>{type}</p>
                        <p>{highlights}</p>

                    </div>
                </div>

               
            </div>





            <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg lg:w-2/4 lg:mx-auto">
                <h2 className="font-bold text-blue-700">Please Give Us Your Information </h2>



                <div className="flex-col flex py-3">
                    <label className="pb-2 text-gray-700 font-semibold"></label>
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("email")} placeholder="Maruf Evan" value={email} />

                </div>
                <div className="flex-col flex py-3">
                    <label className="pb-2 text-gray-700 font-semibold">Your Name</label>
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("Name")} placeholder="Maruf Evan" required />

                </div>

                <div className="flex-col flex py-3">
                    <label className="pb-2 text-gray-700 font-semibold">City</label>
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("city")} placeholder="city" required />
                </div>

                <div className="flex-col flex py-3">
                    <label className="pb-2 text-gray-700 font-semibold">Address</label>
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("address")} placeholder="address" required />
                </div>
                <div className="flex-col flex py-3">
                    <label className="mb-2 text-gray-700 font-semibold">phone</label>
                    <input className='p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200' {...register("phone")} placeholder="phone" required />
                </div>



                <button type='submit' className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300 rounded ">Register</button>






            </form>


        </div>



    );
};

export default Register;