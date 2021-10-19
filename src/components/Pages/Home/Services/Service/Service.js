import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { key,image, name, description} = service;
    return (
        <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
            <div className="card service-card h-100 mx-auto " style={{ width: "18rem" }}>
                <img src={image} className="card-img-top " alt="..." />
                <div class="card-body text-center service-text">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                </div>
                <div className="text-center p-3">
                    <Link to={`/servicedetails/${key}`} className="details-btn ">Show Details</Link>
              </div>
                   
            
            </div>
        </div>
    );
};

export default Service;