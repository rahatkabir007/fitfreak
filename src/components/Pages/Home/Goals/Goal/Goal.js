import React from 'react';
import './Goal.css';

const Goal = ({goal}) => {
    return (
       
            <div className="col-md-6 col-lg-6 col-xxl-3 goal-section mt-2">
                <div className="card goal-card h-100 mx-auto " style={{ width: "18rem" }}>
                    <img src={goal.img} className="card-img-top h-25" alt="..." />
                    <div class="card-body text-center goal-text">
                        <h2 className="card-title text-danger ">{goal.name}</h2>
                        <p className="card-text">{goal.detail}</p>
                    </div>
                </div>
            </div>
    );
};

export default Goal;