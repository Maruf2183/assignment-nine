import React from 'react';

const HiringGide = () => {
    return (
        <div className="w-full bg-blue-200">

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">


                    <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">


                        <div className="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">


                            <div className="w-full md:w-2/5 h-80">
                                <img className="object-center object-cover w-full h-full p-1   " src="https://i.ibb.co/D9SfQF1/sebastien-goldberg-BKLHxgb-YFDI-unsplash.png" alt={`just`} />
                            </div>
                            <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                                <h1 className=" font-spartan">WORK AND LIVE IN BEAUTIFUL, WILD PLACES!</h1>
                                <h2 className="font-spartan">WE'RE HIRING GUIDES!</h2>
                                <p className="font-qahiri">We are hiring guides in many areas!If you’re an experienced outdoors person who loves to share your passion for nature with others, click below to learn more.Great pay, flexible scheduling, the world’s most beautiful places</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    apply now
                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default HiringGide;