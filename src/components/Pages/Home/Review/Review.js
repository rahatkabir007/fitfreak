import React from 'react';
import './Review.css';


const Review = () => {
    return (
        <div className="review-section m-4">
            <div id="carouselExampleControls" className="carousel slide p-5" data-bs-ride="carousel">
                <div className="carousel-inner w-50 mx-auto border border-1 border-secondary p-3 h-75">
                    <div className="carousel-item active p-4">
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-50 mx-auto " alt="..." />
                        <h2>Sara Geller</h2>
                        <p>This Gym Is Really Good,The Instructures Are Really Helpfull</p>
                    </div>
                    <div className="carousel-item p-4">
                        <img src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-50 mx-auto" alt="..." />
                        <h2>John Kim</h2>
                        <p>I Joined This Gym Program 3 Months Ago, And It's Really Good</p>
                        
                    </div>
                    <div className="carousel-item p-4">
                        <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-50 mx-auto" alt="..." />
                        <h2>Rishab Kapoor</h2>
                        <p>As A Foreigner, The Instructors and Management Helped Me a Lot!</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Review;