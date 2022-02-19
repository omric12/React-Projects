import '../styles/About.css';

import MultiplePizzas from '../assets/masala.jpg';
import React from 'react';

function About() {
    return (
        <div className='about'>
            <div
                className='aboutTop'
                style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
            <div className='aboutBottom'>
                <h1> ABOUT US</h1>
                <p>Text</p>
            </div>
        </div>
    );
}

export default About;
