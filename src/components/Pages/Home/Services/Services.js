import React, { useEffect, useState } from 'react';
import Service from '../Services/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-section" id="services">
            <h1 className="text-center">Our Services</h1>
            <hr/>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services; 