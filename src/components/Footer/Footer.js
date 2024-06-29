import React, { useState } from 'react';
import  {IconGitHub, IconInstagram, IconTwitter, IconLinkedin, IconCodeChef}  from '../../icons/index';

export default function Footer() {

    const [active, setActive] = useState(null);
    const socialLinks = [
        "https://github.com/Akhie",
        "https://instagram.com/akhie0",
        "https://twitter.com/akhie0",
        "https://linkedin.com/in/akhie",
        "https://www.codechef.com/users/im_beginner"
    ];

    const onClickLink = (num) => {
        window.open(socialLinks[num]);
        setActive(num);
    }

    return (
        <div style={{marginTop: "220px", marginBottom:"-40px"}}>
            <div className="footerlinks">
                <div className={active === 0 ? "activefeather" : null} onClick={() => onClickLink(0)} ><IconGitHub /></div>
                <div className={active === 1 ? "activefeather" : null} onClick={() => onClickLink(1)} ><IconInstagram /></div>
                <div className={active === 2 ? "activefeather" : null} onClick={() => onClickLink(2)} ><IconTwitter /></div>
                <div className={active === 3 ? "activefeather" : null} onClick={() => onClickLink(3)} ><IconLinkedin /></div>
                <div className={active === 4 ? "activefeather" : null} onClick={() => onClickLink(4)} ><IconCodeChef /></div>
            </div>
            <p style={{fontFamily:"monospace", fontSize:"13px", wordSpacing:"-1px", lineHeight:"20px" }}>
                Desiged & Built by Akhilesh Yadav <br/>
                while( !succeed = try() );
            </p>
        </div>
    )
}
