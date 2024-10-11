import React,{useState,useEffect} from 'react';
import Fade from 'react-reveal/Fade';

import './experience.css'

export default function Experience() {
    const [job, setJob] = useState(true);
    const [asst, setAsst] = useState(true);
    const [senior, setSenior] = useState(true);

    useEffect( () => {
        let element = document.getElementsByClassName('period');
        let desc = document.getElementsByClassName('expDesc');
        let windowWidth = window.innerWidth;
        if(windowWidth <= 480){
           for(let i = 0; i < element.length; i++) {
                element[i].style.display = "block";
                element[i].style.fontSize = "7px";
                desc[i].style.fontSize = "9px";
           }
        }
    },[])

    const expandJob = () => {
        setAsst(false);
        setSenior(false);
        setJob(!job);
    }
    const expandAsst = () => {
        setAsst(!asst);
    }

    const expandSr = () => {
        setSenior(!senior);
    }

    return (
        <div id="experience" className="experience">
            <Fade delay={200}>
                    <h5>
                        <span className="count">02. </span>
                        <span className="heading">Experience &nbsp; </span>
                    </h5>

                        <div className="exp">
                            <ul class="samsung">
                                <div onClick={() => expandJob()}>
                                    <span className="expHeading"> Samsung Data Systems </span>
                                </div>

                                <ul className={job == true ? "sub-menu expand": "hidden"}>
                                    <div onClick={() => expandAsst()} className={asst == true ? "expTitle highlighted" : "expTitle"}>
                                        <span className="vertical-hierarchy"></span>
                                        <span className="hierarchy"></span>
                                        <li > Asst. Manager <span className="period"> April 2024 - Present </span> </li>
                                    </div>
                                    <div id="asstDesc" className={asst == true ? "job_description expand" : "hidden"}>
                                        <p className="expDesc"> Developed reusable Vue.js components for the Manufacturing Execution System. </p>
                                    </div>

                                    <div onClick={() => expandSr()} className={senior == true ? "expTitle highlighted" : "expTitle"}>
                                        <span className="vertical-hierarchy"></span>
                                        <span className="hierarchy"></span>
                                        <li> Senior Executive <span className="period"> May 2022 - March 2024 </span> </li>
                                    </div>
                                    <div id="srDesc" className={senior == true ? "job_description expand" : "hidden"}>
                                        <p className="expDesc"> Developed drag and drop canvas-based website for collaboratively creating
                                            large layouts, managing and optimizing 1,000-5,000 objects. Collaborated with
                                            a three-person team to enhance code efficiency, resulting in reduced memory
                                            usage.
                                        </p>
                                    </div>

                                </ul>
                            </ul>
                        </div>

            </Fade>
        </div>
    )
}