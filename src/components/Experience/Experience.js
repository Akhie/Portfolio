import React from 'react';
import Fade from 'react-reveal/Fade';

import './experience.css'

export default function Experience() {
    return (
        <div id="experience" className="experience">
            <Fade delay={200}>
                    <h5>
                        <span className="count">02. </span>
                        <span className="heading">Experience &nbsp; </span>
                    </h5>
                    <div className="samsung">
                        <h1 className="expHeading underline"> Samsung Data Systems </h1>
                        <div className="exp">
                            <div className="expTitle"> Asst. Manager </div>
                            <p className="period"> April 2024 - Present </p>
                            <p className="expDesc"> Developed reusable Vue.js components for the Manufacturing Execution System. </p>
                            <div className="expTitle"> Senior Executive </div>
                            <p className="period"> May 2022 - March 2024 </p>
                            <p className="expDesc"> Developed drag and drop canvas-based website for collaboratively creating
                                large layouts, managing and optimizing 1,000-5,000 objects. Collaborated with
                                a three-person team to enhance code efficiency, resulting in reduced memory
                                usage. </p>
                        </div>
                    </div>
            </Fade>
        </div>
    )
}