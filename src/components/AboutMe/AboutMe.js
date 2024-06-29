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
                            I have done Full-stack web development course on React specialization from <span className="count underline"> coursera </span>&nbsp;   
                            where i learn <span className="count underline"> Mongodb</span>, <span className="count underline"> Express server</span>, <span className="count underline"> Reactjs </span> and <span className="count underline"> Nodejs</span>. After that i worked on 
                            various projects where i have created multiple websites and learned a lot from them.
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
                                    <li>ReactNative</li>
                                    <li>Firebase</li>
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
