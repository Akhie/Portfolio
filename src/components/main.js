import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import  {IconGitHub, IconInstagram, IconTwitter, IconLinkedin, IconCodeChef}  from '../icons/index';

import Header from './Header/Header.js';
import About from './About/About.js';
import AboutMe from './AboutMe/AboutMe.js';
import Experience from './Experience/Experience.js';
import Projects from './Projects/Projects.js';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


export default function Main() {

    const socialLinks = [
        "https://github.com/Akhie",
        "https://instagram.com/akhie0",
        "https://twitter.com/akhie0",
        "https://linkedin.com/in/akhie",
        "https://www.codechef.com/users/im_beginner"
    ];
    const email = "akhilesh.yadav200093@gmail.com";
    const [active, setActive] = useState(null);

    const onClickLink = (num) => {
        if(num === 5){
            window.open(`mailto:${email}`);
        }
        else{
            window.open(socialLinks[num]);
        }    
        setActive(num);
    }

    const onReset = () => {
        setActive(null);
    }

    return (
        <div>
            <Header />
            
            <div style={{width:"100%", display:"flex"}} >
                <Fade delay={1500}>  
                    <div className="mainleft" // to make links it fixed at left 
                        >
                        <div className={active === 0 ? "activefeather" : null} onClick={() => onClickLink(0)} ><IconGitHub /></div>
                        <div className={active === 1 ? "activefeather" : null} onClick={() => onClickLink(1)} ><IconInstagram /></div>
                        <div className={active === 2 ? "activefeather" : null} onClick={() => onClickLink(2)} ><IconTwitter /></div>
                        <div className={active === 3 ? "activefeather" : null} onClick={() => onClickLink(3)} ><IconLinkedin /></div>
                        <div className={active === 4 ? "activefeather" : null} onClick={() => onClickLink(4)} ><IconCodeChef /></div>
                        <div style={{ // vertical line css
                            margin:"15px 0px 0px 8px" ,height:"150px", float:"left", border:"1px inset #a8b2d1" }} ></div>
                    </div>
                </Fade>

                <div  className="mainbody" onClick={() => onReset()} 
                    // leave margin at left and right
                    >
                    <About />
                    <AboutMe />
                    <Experience />
                    <Projects />
                    <Education />
                    <Fade delay={200}> <Contact /> </Fade>
                    <Footer />
                </div>

                <Fade delay={1500}> 
                    <div className="mainright" // to make email fixed at right end
                        >
                        <div className={active === 5 ? "activefeather email" : "email"} onClick={() => onClickLink(5)}>
                            <p>{email}</p>
                        </div>
                        <div style={{ // vertical line css
                            margin:"20px 0px 0px 17px" ,height:"150px", float:"left", border:"1px inset #a8b2d1"}} ></div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

