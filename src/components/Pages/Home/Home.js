import React from 'react';
import Banner from '../Home/Banner/Banner';
import AboutUs from '../Home/AboutUs/AboutUs';
import Goals from '../Home/Goals/Goals';
import Slider from './Slider/Slider';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Goals></Goals>
            <Slider></Slider>
            <Services></Services>
            <Trainers></Trainers>
            <Review></Review>
        </div>
    );
};

export default Home;