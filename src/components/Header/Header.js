import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import './header.css';
import Logo  from './logo.js';
import resume from './Resume.pdf';

export default function Header() {
    const [active, setActive] = useState(0);

    const ActiveLink = (num) => {
        setActive(num);
    }

    const ResumeLink = () => {
        setActive(0);
        window.open(resume);
    }

    return (
        <div className='header pt-3'>
        <nav className="navbar navbar-expand-md justify-content-between">
            <Fade delay={300}>
                <a className="navbar-brand" href="/"><Logo /></a>
            </Fade>

            <div classNameName='d-flex justify-content-end'>
                <button className="navbar-toggler btn-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Fade top>
                            <li className="nav-item">
                                <a className={active === 1 ? "nav-link active" : "nav-link"} onClick={() => ActiveLink(1)} href="#aboutme"><span className='count'>01. </span><span>About</span></a>
                            </li>
                        </Fade>
                        <Fade top>
                            <li className="nav-item">
                                <a className={active === 2 ? "nav-link active" : "nav-link"} onClick={() => ActiveLink(2)} href="#experience"><span className='count'>02. </span><span>Experience</span></a>
                            </li>
                        </Fade>
                        <Fade top delay={150}>
                            <li className="nav-item">
                                <a className={active === 3 ? "active nav-link" : "nav-link"} onClick={() => ActiveLink(3)} href="#projects"><span className='count'>03. </span><span>Projects</span></a>
                            </li>
                        </Fade>
                        <Fade top delay={300}>
                            <li className="nav-item">
                                <a className={active === 4 ? "active nav-link" : "nav-link"} onClick={() => ActiveLink(4)} href="#education"><span className='count'>04. </span><span>Education</span></a>
                            </li>
                        </Fade>
                        <Fade top delay={450}>
                            <li className="nav-item">
                                <a className={active === 5 ? "active nav-link" : "nav-link"} onClick={() => ActiveLink(5)} href="#contact"><span className='count'>05.&nbsp;</span><span>Contact</span></a>
                            </li>
                        </Fade>
                    </ul> 
                    <Fade top delay={600}>
                        <button className="btn-resume mx-2" type="submit" onClick={() => ResumeLink()}><span>Resume</span></button>
                    </Fade>    
                </div>
            </div>    
        </nav>
    </div>    
    )
}