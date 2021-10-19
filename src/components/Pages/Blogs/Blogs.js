import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div >
            <div className="blogs-section" >
                <h1>Blogs</h1>
            </div>
           
            <div className="container">
                <h1 className="text-center mt-5">Our Blogs</h1>
                <hr />
                <div className="row">
                    {
                        blogs.map(blog => <Blog key={blog.key} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;