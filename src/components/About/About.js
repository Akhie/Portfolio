import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import './about.css'

export default function About() {

    const HireLink = () => {
        window.open("https://www.linkedin.com/in/akhie/");
    }

    return (
        <div className='about'>
            <div className='leftpart'>
                <Fade bottom delay={750}>
                    <p style={{color: '#64ffde'}}>Hi, my name is</p>
                </Fade>
                <div className="main-name">
                    <Bounce delay={900}>
                        <h1 className="my-3 name">
                            <span>A</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={950}>
                        <h1 className="my-3 name">
                            <span>k</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1000}>
                        <h1 className="my-3 name">
                            <span>h</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1100}>
                        <h1 className="my-3 name">
                            <span>i</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1200}>
                        <h1 className="my-3 name">
                            <span>l</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1300}>
                        <h1 className="my-3 name">
                            <span>e</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1400}>
                        <h1 className="my-3 name">
                            <span>s</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1500}>
                        <h1 className="my-3 name">
                            <span>h</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1600}>
                        <h1 className="my-3 name">
                            <span>&nbsp;</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1700}>
                        <h1 className="my-3 name">
                            <span>Y</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1800}>
                        <h1 className="my-3 name">
                            <span>a</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={1900}>
                        <h1 className="my-3 name">
                            <span>d</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={2000}>
                        <h1 className="my-3 name">
                            <span>a</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={2100}>
                        <h1 className="my-3 name">
                            <span>v</span>
                        </h1>
                    </Bounce>
                    <Bounce delay={2200}>
                        <h1 className="my-3 name">
                            <span>.</span>
                        </h1>
                    </Bounce>
                </div>
                <Fade bottom delay={1050}>
                    <h1 className="my-3">
                        <span>I build things for the web.</span>
                    </h1>
                </Fade>
                <Fade bottom delay={1200}>
                    <p className="my-3">I’m a MERN Stack Web Developer. 
                        Currently, I’m looking for any work from home opportunity. I Can develop 
                        website for you and I have already worked on various projects related to 
                        web development. 
                    </p>
                </Fade>
                <Fade bottom delay={1350}>
                    <button className="btn-hire hire" type="submit" onClick={() => HireLink()}><span> Click to Hire Me! </span></button>
                </Fade>
            </div>    
        </div>
    )
}

