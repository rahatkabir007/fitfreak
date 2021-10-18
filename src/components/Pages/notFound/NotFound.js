import React from 'react';
import "./NotFound.css";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="error-container m-5">
            <div class="wrap">
                <div class="main2">
                    <div class="banner">
                        <img src={require("./images/error-banner.png").default} alt="" />
                    </div>
                    <div class="text">
                        <h1 id="error-head">The requested url was not found !...</h1>
                        <p id="error-para">Sorry!Evidently the document you were looking for has either been moved or no longer exists!</p>
                        
                    </div>
                </div>

            </div>
            <div className="text-center p-4">
                <NavLink to="/home" className="primary-btn">Redirect To Home Page</NavLink>
            </div>
        </div>
    );
};

export default NotFound;