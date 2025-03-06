import React from 'react';
import './homepage.css'; // Import your CSS file
import busImage from '../../assets/bg.jpg'; // Import your image file

export default function Homepage() {
    return (
        <div className='container maint-cnt'>
            {/* Background image */}
            <div className="background-image"></div>

            <div className="header-nav">
                <span className="mytext1">COLLEGE BUS TRANSPORTATION </span>
            </div>
            
            <div className="content">
                {/* Image content */}
                <img src={busImage} alt="College Bus" className="bus-image" />
            </div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span>always Travel</span>
                        <div className="message">
                            <div className="word1">Success </div>
                            <div className="word2">begins</div>
                            <div className="word3">From Vehicle</div>
                        </div>
                    </h1>
                </div>

                <a href="#/login" className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="red" />
                                <stop offset="100%" stopColor="pink" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Get Started!</span>
                </a>
            </div>
        </div>
    )
}
