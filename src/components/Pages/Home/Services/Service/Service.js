import React from 'react';
import './Service.css'
const Service = ({service}) => {
    return (
        <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
            <div className="card service-card h-100 mx-auto " style={{ width: "18rem" }}>
                <img src={service.image} className="card-img-top " alt="..." />
                <div class="card-body text-center service-text">
                    <h2 className="card-title">{service.name}</h2>
                    <p className="card-text">{service.description}</p>
                </div>
                <div className="text-center p-3">
                    <a href="/services" className="details-btn ">Show Details</a>
              </div>
                   
            
            </div>
        </div>
    );
};

export default Service;