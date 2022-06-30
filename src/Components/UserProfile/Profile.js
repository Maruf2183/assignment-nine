
import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import useAuth from '../../Hook/useAuth';
import '../Profiledata/Profiledata'
import Profiledata from '../Profiledata/Profiledata';

const Profile = () => {
    const { user, isloading } = useAuth();
    const { email } = user;
    const [bookedData, setBookedData] = useState([]);

    const { displayName, photoURL } = user;
    
    const dynamicUrl = `https://quiet-hamlet-08225.herokuapp.com/booking?email=${email}`

    useEffect(() => {
        if (!isloading) {
            axios.get(dynamicUrl).then(data =>setBookedData(data.data))
        };
    }, [isloading]);
    console.log(bookedData);




    if (isloading) {
        return (
        <h2>this page is loading please wait</h2>
    )
}







    return (
        <div className='p-12' >
            <div className='min-h-screen bg-green-900 flex flex-col lg:flex-col gap-3 items-center content-center  justify-center p-10'>
                <div className='h-80  bg-gray-100 text-black w-full flex flex-col  item-center content-center p-10 '>
                    <img className='rounded-full w-40 h-40 mx-auto' src={photoURL} alt="" />
                    <h2 className='text-green-200' >{displayName}</h2>
                </div>
                <div className='h-auto bg-blue-100 w-full'>


                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
                    {
                        bookedData.map(data=> <Profiledata

                            key={bookedData._id}
                            data={data}
                        
                        ></Profiledata>)


                        
                        
                    }
                  </div>
                    



                </div>
            </div>






        </div>
    );
};

export default Profile;