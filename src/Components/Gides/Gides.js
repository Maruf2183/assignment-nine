import React from 'react';
import GideCards from './GideCards';

const Gides = () => {
    const gides = [
        {id:'12',name:'Dany Bailey',skill:"guder",image:'https://www.accessibletourism.org/resources/toolip/img/2016/04/03/britmus-t-guide.jpg'},
        {id:'14',name:'John Herley',skill:"Driver",image:'https://upload.wikimedia.org/wikipedia/commons/3/32/Tour_Guide.jpg'},
        {id:'16',name:'Bob Jerry',skill:"Guide",image:'https://en.parisinfo.com/var/otcp/sites/images/media/1.-photos/01.-ambiance-630-x-405/guide-conferencier-630x405-c-thinkstock2/56940-1-fre-FR/Guide-conferencier-630x405-C-Thinkstock.jpg'},
        {id:'17',name:'Maruf Evan',skill:"Manager",image:'https://i.pinimg.com/750x/63/b5/49/63b549787499149ebb338efd8ced4e18.jpg'},
        {id:'21',name:'jara Nancy',skill:"Guide",image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/woman-hiking-at-red-rock-canyon-during-sunset-with-royalty-free-image-1601478369.jpg'},
        {id:'23',name:'Lusai Inderi',skill:"Software Engineer",image:'https://santabarbaraca.com/wp-content/uploads/2015/08/hiking-in-santa-barbara.jpg'}
       
    ]
    return (
        <div>
            <div className="w-full bg-gray-600">
                <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 py-16">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Check our awesome team memwhite
                        </h1>
                    </div>
                       
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16 ">
                   
                        {
                            gides.map(gide=> <GideCards key={gide.id} gidedata={gide} />)
                     }
                    </div>
                </section>
                  
                    
            </div>
        </div>
    );
};

export default Gides;