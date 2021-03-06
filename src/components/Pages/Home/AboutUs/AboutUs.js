import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="container p-4 " id="about">
            <div className="about-us-area row gx-4">
                <div className="left-area col-lg-6 p-4">
                    <img className="w-100 ms-auto" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="right-area col-lg-6 p-4">
                    <h1>About Us</h1>
                    <hr/>
                    <p> Our motto says it all:  “FitFreak - The Online Resource for Fitness Freaks.” FitFreak specializes and tailors certifications to those who wants to fit in the fitness industry and have an extensive pre-existing knowledge in the area. FitFreak helps you specialize your continuing education and marketability by testing in industry-specific fields. Take one of our services today. Pay only if you like it!</p>
                    <Link to='/about' className="primary-btn">Read More!</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;