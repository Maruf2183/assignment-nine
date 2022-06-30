import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderedData from './OrderedData';

const ManageOrder = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('https://quiet-hamlet-08225.herokuapp.com/booking').then(data => setBookings(data.data));
    }, []);
    console.log(bookings);













    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 min-h-screen bg-blue-900">
        {
                bookings.map(data => <OrderedData
                    

                    key={data._id}
                    data={data}
                >
                    

                    </OrderedData>
                    
                
                    )


            
            
        }
      </div>
        


      
       





    );
};

export default ManageOrder;