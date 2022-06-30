import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profiledata = ({ data }) => {
    const { Name, serviceID, city, address, phone, status,_id} = data;


    const url = `https://quiet-hamlet-08225.herokuapp.com/services/${serviceID}`;

    const [destination, setDestination] = useState({});



    useEffect(() => {
        axios.get(url).then(destinate => setDestination(destinate.data))

    }, [])

    console.log(destination);


    const { image, tittle, price, } = destination;
    

    const deleteURL=`https://quiet-hamlet-08225.herokuapp.com/booking/${_id}`

    const handleDelete = () => {
        console.log('delete clicked');
        axios.delete(deleteURL).then(data => console.log(data));
    }














    return (
        <div className='p-3'>


            <div className="w-full bg-blue-300 rounded sahdow-lg flex flex-col  lg:flex-row sm:flex-col items-center">
                <div className="w-full lg:w-2/4  lg:h-80">
                    <img className="object-center object-cover rounded  h-full w-full lg:h-full lg:w-full" src={image} alt={`thi sis a card images`} />

                </div>
                <div className="text-left  text-xs  w-full p-4 h-full px-2 lg:w-2/4 lg:h-full overflow-hidden lg:text-sm bg-blue-300 lg:mx-4">
                    <h2 className=" text-blue-700  mb-1 max-w-xs	">{tittle}</h2>
                    <h5 className="">{price} <span>$</span> </h5>
                    <p>{Name}</p>
                    <p>{city}</p>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <span className="bg-blue-500  text-white font-bold py-2 px-8 rounded">
                        {status}
                    </span>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 mx-4 text-white font-bold py-2 px-8 rounded">
                        Cencel
                    </button>

                </div>
            </div>


        </div>






    );
};

export default Profiledata;