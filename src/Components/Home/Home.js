import React from 'react';
import Slider from '../Carousol/components/Slider';
import Gides from '../Gides/Gides';
import HiringGide from '../HiringGide/HiringGide';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Services></Services>
            <Gides></Gides>
            <HiringGide></HiringGide>
        </div>
    );
};

export default Home;