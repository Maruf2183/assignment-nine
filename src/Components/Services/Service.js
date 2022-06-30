import React from 'react';
import { useHistory,} from 'react-router';

const Service = ({ datais }) => {



    const { _id,image, tittle, price, location, type, highlights } = datais;
    const history = useHistory();
    const url=`/home/${_id}`
   
    const handleClick = (event) => {
        history.push(url)
    }


        
        

    return (







        <div className="w-full bg-pink-50 rounded sahdow-lg flex flex-col  lg:flex-row sm:flex-col items-center">
            <div className="w-full lg:w-2/4 lg:h-80">
                <img className="object-center object-cover rounded  h-full w-full lg:h-full lg:w-full" src={image} alt={`thi sis a card images`} />

            </div>
            <div className="text-left text-xs  w-full p-6 h-full px-2 lg:w-2/4 lg:h-full overflow-hidden lg:text-sm bg-blue-300">
                <p className=" text-white  mb-1 max-w-xs	">{tittle}</p>
                <h4 className="">{price} <span>$</span> </h4>
                <p>{location}</p>
                <p>{highlights}</p>
                <p>{type}</p>
                <button type='submit' onClick={(event)=>handleClick(event)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Book Now
                </button>

            </div>
        </div>


















    );

};

export default Service;