import React from 'react';
import Fade from 'react-reveal/Fade';

import './education.css';
import nituklogo from './nit-logo.jpg';

export default function Education() {

    const onClickCollege = () => {
        window.open("https://www.nituk.ac.in");
    } 

    return (
        <div id="education" className="education">
            <Fade delay={200}>
            <div className="abouthead">
                <h5> 
                    <span className="count">04. </span>
                    <span className="heading">Education &nbsp; </span>
                </h5>
            </div>
            </Fade>
            <div className="btech">
                <div className="btechlogo">
                    <img src={nituklogo} alt="college logo" />
                </div>
                <Fade delay={200}>
                    <div className="btechabout">
                        <h4 className="bigscreen">Bachelor of Technology</h4>
                        <h4 className="smallscreen">B.Tech</h4>
                        <div className="btechdetails">
                            <h5 className="underline" onClick={() => onClickCollege()}>National Institute of Technology, Uttarakhand </h5>
                            <p>Computer Science & Engineering <br/>
                                2018 - 2022 (Final Year Student)<br/>
                                CGPA: 8.69
                            </p>
                        </div>    
                    </div>
                </Fade>
            </div>
            <Fade delay={200}>
            <div className="school">
                <div className="high">
                    <h5>High School</h5>
                    <p> 2014 - 2015 <br/>
                        CBSE Board <br/>
                        CGPA: 9.8
                    </p>
                </div>
                <div className="senior">
                    <h5>Senior Secondary</h5>
                    <p> 2016 - 2017 <br/>
                        CBSE Board <br/>
                        percentage: 89%
                    </p>
                </div>
            </div>
            </Fade>
        </div>
    )
}
