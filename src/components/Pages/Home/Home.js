import React from 'react';
import Banner from '../Home/Banner/Banner';
import AboutUs from '../Home/AboutUs/AboutUs';
import Goals from '../Home/Goals/Goals';
import Slider from './Slider/Slider';
import Services from './Services/Services';
import Trainers from './Trainers/Trainers';
import Review from './Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Goals></Goals>
            <Slider></Slider>
            <Services></Services>
            <div className="text-center mt-4 load-more">
                <Link to="/services" className="primary-btn ">Load More..</Link>
            </div>
            <Trainers></Trainers>
            <Review></Review>
        </div>
    );
};

export default Home;