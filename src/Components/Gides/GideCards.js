import React from 'react';

const GideCards = ({ gidedata }) => {
    const { name, skill, image } = gidedata;


    return (




        <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src={image} alt={`thi sis a card images`} />

            </div>
            <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{name}</p>
                <p className="text-base text-gray-400 font-normal"> {skill}</p>
              

            </div>
        </div>






    );
};

export default GideCards;