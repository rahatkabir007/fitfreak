import React, { useEffect, useState } from 'react';
import Trainer from './Trainer/Trainer';
import './Trainers.css';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div className="trainers-section">
            <h1 className="text-center">Expert Trainers</h1>
            <hr />

      
                <div className="row ">
                    {
                        trainers.map(trainer=> <Trainer key={trainer.key} trainer={trainer}></Trainer>)
                    }
                </div>
            
        
        </div>
    );
};

export default Trainers;