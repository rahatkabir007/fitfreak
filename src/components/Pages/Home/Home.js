import React from 'react';
import Header from '../Home/Header/Header';
import Banner from '../Home/Banner/Banner';
import AboutUs from '../Home/AboutUs/AboutUs';
import Goals from '../Home/Goals/Goals';
import Slider from './Slider/Slider';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';
import Review from './Review/Review';
import Footer from './Footer/Footer';

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
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;