import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./Banner.css"

const Banner = () => {
    const [flip, set] = useState(false);
    return (
        <div>
            
            <div className="banner-div animated">
                <animated.div style={useSpring({
                    to: { opacity: 1 }, reset: true,
                    reverse: flip,
                    delay: 200, onRest: () => set(!flip), from: { opacity: 0 }
                })}> <a href="/signup" className="banner-btn bounce-in-top">Join Now</a></animated.div>
               
           </div>
           

        </div>
    );
};

export default Banner;