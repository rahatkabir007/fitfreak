import React from 'react';
import './Trainer.css';

const Trainer = ({trainer}) => {
    return (
        <div className="col-md-6 col-lg-6 col-xxl-4 trainer-section mt-3">
            <div className="card trainer-card mx-auto">
                <img src={trainer.insturctorsImage} className="mx-auto" alt="..." />
                <div className= "trainer-text">
                    <h2 className="card-title">{trainer.instructor}</h2>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Trainer;