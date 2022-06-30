import React, { useEffect, useState, } from 'react';
import Service from './Service';


const Services = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errmsg, seteremsg] = useState('')
    

    useEffect(() => {
        fetch('https://quiet-hamlet-08225.herokuapp.com/services').then(res => res.json()).then(data => {

            setDatas(data)
            setLoading(false)
        }).catch(error=> seteremsg(error))
    }, []);

    console.log(errmsg);
    if (loading) {
        return (

            <div className='bg-purple-600 w-full grid item-center justify-center'>

                <h3>data is comming please wait</h3>
                <div className='p-12 h-80 w-80 border-4 bg-gradient-to-r from-green-400 to-blue-500  border-opacity-100 animate-spin z-10 rounded-full'></div>

            </div>
        )
    }

    return (

        <div>





            <div className="w-full bg-purple-600">
                <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Choise your favourite destination
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {

                            datas.map(data => <Service
                                key={data._id}
                                datais={data}


                            ></Service>)
                        }

                    </div>
                </section>


            </div>
        </div>



















    );
};

export default Services;