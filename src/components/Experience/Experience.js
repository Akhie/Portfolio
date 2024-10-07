import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';

import './experience.css'

export default function Experience() {
    const [job, setJob] = useState(false);
    const [asst, setAsst] = useState(false);
    const [senior, setSenior] = useState(false);

    const expandJob = () => {
        setAsst(false);
        setSenior(false);
        setJob(!job);
    }

    const expandAsst = () => {
        setSenior(false);
        setAsst(!asst);
    }

    const expandSr = () => {
        setAsst(false);
        setSenior(!senior);
    }

    return (
        <div id="experience" className="experience">
            <Fade delay={200}>
                    <h5>
                        <span className="count">02. </span>
                        <span className="heading">Experience &nbsp; </span>
                    </h5>
                    <div className="samsung">
                        <div className="exp">
                            <ul class="nav">
                                <li onClick={() => expandJob()}>
                                    <b class="caret"></b>
                                    <i class="fa fa-th-large"></i>
                                    <span className="expHeading"> Samsung Data Systems </span>
                                </li>
                                <ul className={job == true ? "sub-menu expand": "hidden"}>
                                    <li onClick={() => expandSr()} className={senior == true ? "expTitle active" : "expTitle"}> Senior Executive </li>
                                    <li onClick={() => expandAsst()} className={asst == true ? "expTitle active" : "expTitle"}> Asst. Manager </li>
                                </ul>


                            </ul>
                            <div id="asstDesc" className={asst == true ? "job_description expand" : "hidden"}>
                                <p className="period"> April 2024 - Present </p>
                                <p className="expDesc"> Developed reusable Vue.js components for the Manufacturing Execution System. </p>
                            </div>
                            <div id="srDesc" className={senior == true ? "job_description expand" : "hidden"}>
                                <p  className="period"> May 2022 - March 2024 </p>
                                <p className="expDesc"> Developed drag and drop canvas-based website for collaboratively creating
                                    large layouts, managing and optimizing 1,000-5,000 objects. Collaborated with
                                    a three-person team to enhance code efficiency, resulting in reduced memory
                                    usage.
                                </p>
                            </div>
                        </div>
                    </div>
            </Fade>
        </div>
    )
}