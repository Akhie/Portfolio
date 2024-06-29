import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import './projects.css';
import uring from './uring.png';
import jobability from './jobability.png';
import justmail from './justmail.png';

import  {IconProjectGitHub, IconExternal, IconFolder}  from '../../icons/index';


export default function Projects() {

    const socialLinks = [
        "https://github.com/Akhie/Services",
        "https://uring.herokuapp.com/",
        "https://github.com/Akhie/JobAbility",
        "https://jobability.herokuapp.com/",
        "https://github.com/Akhie/JustMail",
        "https://justmailit.herokuapp.com/", 

        "https://github.com/Akhie/Course_Registration",
        "https://nituk.herokuapp.com/",
        "https://github.com/Akhie/Instagram_App_Clone",
        "https://github.com/Akhie/Youtube_Clone",
        "https://getinternship.herokuapp.com/"
    ];
    const [active, setActive] = useState(null);
    const [showmore, setShowmore] = useState(false);

    const onClickLink = (num) => {
        window.open(socialLinks[num]);
        setActive(num);
    }

    const onClickCard = (num) => {
        window.open(socialLinks[num]);
    }

    const onExpand = () => {
        setShowmore(!showmore);
    }

    return (
            <div id="projects">

                <Fade delay={200} style={{marginTop: "50px"}}>
                <div class="project-container">

                    <div className="Projecthead">
                        <h5> 
                            <span className="count">03. </span>
                            <span className="heading">Some Things I've Built &nbsp; </span>
                        </h5>
                    </div>

                    { /* Featured Project 1 */ }
                    <div class="project project-right">
                        <div class="project-content project-content-right">
                            <div class="project-label">Featured Project</div>
                            <h4 class="project-title underline" onClick={() => onClickLink(1)}>Uring</h4>
                            <div class="project-details project-details-right">
                                <p>A website for users where they can connect to local Service Provider's and 
                                    contact them for thier services. There users and service provider's need to register
                                     with the details and they will be shown based on their locations.
                                </p>
                                <ul>
                                    <li>AdobeXD</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>Heroku</li>
                                </ul>
                                <div className="project-links project-links-right">
                                    <div className={ active === 0 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(0)} >
                                        <IconProjectGitHub />
                                    </div>
                                    <div className={ active === 1 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(1)} >
                                        <IconExternal />
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div class="project-img project-img-right" onClick={() => onClickLink(1)}>
                            <img src={uring} alt="uring" />
                        </div>
                    </div>

                    { /* Featured project 2 */ }
                    <div class="project project2">
                        <div class="project-content">
                            <div class="project-label">Featured Project</div>
                            <h4 class="project-title underline" onClick={() => onClickLink(3)}>JobAbility</h4>
                            <div class="project-details">
                                <p>A Job portal for differently abled where they can find out jobs and 
                                    apply for them. NGO's can also register there and can connect with these poeple's
                                     and help them get better job.
                                </p>
                                <ul>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>Heroku</li>
                                </ul>
                                <div className="project-links">
                                    <div className={ active === 2 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(2)} >
                                        <IconProjectGitHub />
                                    </div>
                                    <div className={ active === 3 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(3)} >
                                        <IconExternal />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-img" onClick={() => onClickLink(3)}>
                            <img src={jobability} alt="uring" />
                        </div>
                    </div> 

                    { /* Featured Project 3 */ }
                    <div class="project project3 project-right">
                        <div class="project-content project-content-right">
                            <div class="project-label">Featured Project</div>
                            <h4 class="project-title underline" onClick={() => onClickLink(5)}>JustMail</h4>
                            <div class="project-details project-details-right">
                                <p>Mail Scheduling website where you just need to register your gmail
                                     and then you can schedule mail for a particular day & time or you 
                                     can even set monthly,weekly mails and it will send mails to them
                                      automatically.
                                </p>
                                <ul>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>Heroku</li>
                                </ul>
                                <div className="project-links project-links-right">
                                    <div className={ active === 4 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(4)} >
                                        <IconProjectGitHub />
                                    </div>
                                    <div className={ active === 5 ? "project-link activeproject" : "project-link"}
                                        onClick={() => onClickLink(5)} >
                                        <IconExternal />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="project-img project-img-right" onClick={() => onClickLink(5)}>
                            <img src={justmail} alt="uring" />
                        </div>
                    </div>
                </div>
                </Fade>

                {/* Other Projects */ }
                <div className="otherProjects" style={{marginTop: "100px"}}>
                    <div className=" heading otherProjectheader"><h3>Other Projects</h3></div>
                
                    {/* row = 1 */}
                    <div className="Cardrow row1" >

                        {/* card = 1 */}
                        <Fade bottom delay={200}>
                        <div className="Card" onClick={() => onClickCard(6)}>
                            <div className="Cardhead">
                                <div className="Cardheadleft">
                                    <IconFolder />
                                </div>
                                <div className="Cardheadright">
                                    <div className={ active === 6 ? "otherprojectlink activeproject" : "otherprojectlink"}
                                        onClick={() => onClickLink(6)} >
                                        <IconProjectGitHub />
                                    </div>
                                    <div className={ active === 7 ? "otherprojectlink activeproject" : "otherprojectlink"}
                                        onClick={() => onClickLink(7)} >
                                        <IconExternal />
                                    </div>
                                </div>
                            </div>
                            <div className="Cardbody">
                                <h5 className="underline">Course Registration web Portal</h5>
                                <p>A web portal for my college where students can register
                                    courses which are floated by the college. 
                                </p>
                            </div>
                            <div className="Cardfooter">
                                <ul>
                                    <li>React</li>
                                    <li>NodeJs</li>
                                    <li>MongoDB</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                        </Fade>

                        {/* card = 2 */}
                        <Fade bottom delay={200}>
                        <div className="Card" onClick={() => onClickCard(8)}>
                            <div className="Cardhead">
                                <div className="Cardheadleft">
                                    <IconFolder />
                                </div>
                                <div className="Cardheadright">
                                    <div className={ active === 8 ? "otherprojectlink activeproject" : "otherprojectlink"}
                                        onClick={() => onClickLink(8)} >
                                        <IconProjectGitHub />
                                    </div>
                                </div>
                            </div>
                            <div className="Cardbody">
                                <h5 className="underline">Instagram App Clone</h5>
                                <p>Image and post sharing mobile application with features like 
                                    follow user's, search user, like, dislike & commment on posts.
                                </p>
                            </div>
                            <div className="Cardfooter">
                                <ul>
                                    <li>ReactNative</li>
                                    <li>Firebase</li>
                                    <li>Expo-cli</li>
                                </ul>
                            </div>
                        </div>
                        </Fade>

                        {/* card = 3 */}
                        <Fade bottom delay={200}>
                        <div className="Card" onClick={() => onClickCard(9)}>
                            <div className="Cardhead">
                                <div className="Cardheadleft">
                                    <IconFolder />
                                </div>
                                <div className="Cardheadright">
                                    <div className={ active === 9 ? "otherprojectlink activeproject" : "otherprojectlink"}
                                        onClick={() => onClickLink(9)} >
                                        <IconProjectGitHub />
                                    </div>
                                </div>
                            </div>
                            <div className="Cardbody">
                                <h5 className="underline">Youtube Clone</h5>
                                <p>A video sharing website with features like video upload, video feeds, subscribe option, 
                                    like, dislike & commment on videos and reply of commments.
                                </p>
                            </div>
                            <div className="Cardfooter">
                                <ul>
                                    <li>React</li>
                                    <li>NodeJs</li>
                                    <li>MongoDB</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                        </Fade>

                    </div>

                    {// show more button working
                        showmore ? 
                        /* row = 2 */
                    <div className="Cardrow"> 

                        {/* card = 4 */}
                        <Fade bottom  delay={200}>
                        <div className="Card" onClick={() => onClickCard(10)}>
                            <div className="Cardhead">
                                <div className="Cardheadleft">
                                    <IconFolder />
                                </div>
                                <div className="Cardheadright">
                                    <div className={ active === 10 ? "otherprojectlink activeproject" : "otherprojectlink"}
                                        onClick={() => onClickLink(10)} >
                                        <IconExternal />
                                    </div>
                                </div>
                            </div>
                            <div className="Cardbody">
                                <h5 className="underline">GetInternship</h5>
                                <p>A website to provide information regarding internships from various companies and
                                     users can also apply from there.
                                </p>
                            </div>
                            <div className="Cardfooter">
                                <ul>
                                    <li>React</li>
                                    <li>NodeJs</li>
                                    <li>MongoDB</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                        </Fade>

                    </div>  /* row 2 ends here */  : null }

                </div> {/* other project ends here */}

                {/* show more button */}
                <Fade delay={200}>
                    <button className="btn-hire" onClick={() => onExpand()}>{ showmore ? "Show Less" : "Show More" }</button>
                </Fade>

            </div>
    )
}
