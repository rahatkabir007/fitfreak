import React from 'react';
import Goal from './Goal/Goal';
import './Goals.css';

const Goals = () => {
    const goals = [
        {
            key: '1',
            img: "https://preview.colorlib.com/theme/gutim/img/services/xservice-icon-1.png.pagespeed.ic.gvEWC1Zm43.png",
            name: 'Routine',
            detail: 'Routine is very important. We will make a plan to workout five days per week and rest two days.'
        },
        {
            key: '2',
            img: 'https://preview.colorlib.com/theme/gutim/img/services/xservice-icon-2.png.pagespeed.ic.ZwoiI6BJa3.png',
            name: 'Yoga',
            detail: 'Yoga is a mind and body practice. We will Practice yoga on our sessions to make the body flexible.'
        },
        {
            key: '3',
            img: 'https://preview.colorlib.com/theme/gutim/img/services/xservice-icon-3.png.pagespeed.ic._68D8NThZb.png',
            name: 'Workout',
            detail: 'We will do a full body workout that aims to hit all the major muscle groups in one single session.'
        },
        {
            key: '4',
            img: 'https://preview.colorlib.com/theme/gutim/img/services/xservice-icon-4.png.pagespeed.ic.6eqWFXPBDw.png',
            name: 'Weight Loss',
            detail: 'From healthy diet plans to helpful weight loss tools, here you will find latest diet news and information.'
        },
    ]
    return (
        <div className="mt-3 goals-section container">
            <h1 className="text-center">Our Goals</h1>
            <hr />
            <div className="row my-2">
                {
                 
                    goals.map(goal => <Goal key={goal.key} goal={goal}></Goal>)
                }
            </div>
        </div>
    );
};

export default Goals;