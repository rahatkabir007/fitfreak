import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';
const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const { serviceKey } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, [])
    
    const searchDetails = serviceDetails.find(details => details.key === serviceKey)
    return (
        <div className="details">
            <div className="details-section">
                <h1>Details</h1>
            </div>
            <div className="container ">
                <div className="image-area my-3 w-50 mx-auto text-center" >
                    <img className="w-50 mx-auto" src={searchDetails?.image}  alt="" />

                </div>
                <div className="text-area w-50 mx-auto text-center">
                    <h1>{searchDetails?.name}</h1>
                    <p>{searchDetails?.description}</p>
                    <h3>Insturctor: {searchDetails?.instructor}</h3>
                    <img className="w-25 mx-auto my-2" src={searchDetails?.insturctorsImage} alt="" />
                    <p className="detailedinfo">{searchDetails?.detailedInfo}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;