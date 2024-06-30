import React from 'react';
import Fade from 'react-reveal/Fade';

import './Aboutme.css'
import me from './Akhilesh.png';

export default function Aboutme() {
    return (
        <div id="aboutme" className="aboutme">
            <Fade delay={200}>
                <div className="abouthead">
                    <h5> 
                        <span className="count">01. </span> 
                        <span className="heading">About Me &nbsp; </span>
                    </h5>
                </div>
            </Fade>
            <div className="aboutmain">
                <Fade delay={200}>
                    <div className='aboutcontent'>
                        <p>
                        Hello! My name is Akhilesh and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2019 when I decided to learn <span className="count underline"> HTML</span>, <span className="count underline"> CSS </span> & <span className="count underline"> PHP!</span>
                        </p>
                        <p className="mt-2">
                            I have professional experience of 2 years as Full-stack web developer on <span className="count underline"> Vue </span>&nbsp;
                            & <span className="count underline"> React </span> as Frontend, <span className="count underline"> Springboot </span> as backend and <span className="count underline"> MySQL </span> as database. I worked on
                            various projects realated to MERN stack as well where i have created multiple websites and learned a lot from them.
                        </p>
                        <p  className="mt-2">
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className='mt-2'>
                            <div className='technologies'>
                                <ul className="techdiv">
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Nodejs</li>
                                </ul> 
                                <ul className="techdiv">
                                    <li>Vue</li>
                                    <li>Springboot</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={200}>    
                    <div className="Mypic">
                        <div className="me">
                            <img  src={me} alt="myPic" />
                        </div>
                        <div className="backme"></div>
                    </div>
                </Fade>    
            </div>     
        </div>
    )
}
