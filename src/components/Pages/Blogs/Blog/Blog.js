import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    const { image, title, details } = blog;
    return (
        <div className="col-md-6 col-lg-6 col-xxl-6 blog-section mt-3 mb-3">
            <div className="card blog-card h-100 mx-auto " >
                <img src={image} className="card-img-top " alt="..." />
                <div class="card-body text-center blog-text">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;