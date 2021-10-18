import React from 'react';
import Header from '../Home/Header/Header';
import Banner from '../Home/Banner/Banner';
import AboutUs from '../Home/AboutUs/AboutUs';
import Goals from '../Home/Goals/Goals';
import Slider from './Slider/Slider';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Goals></Goals>
            <Slider></Slider>
            <Services></Services>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;