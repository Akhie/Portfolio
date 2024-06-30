import React from 'react';
import './contact.css';

export default function Contact() {

    const onMail = () => {
        window.open("mailto:akhilesh.yadav200093@gmail.com");
    }

    return (
        <div id="contact" className="contact">
            <p className="count">05. What's Next? </p>
            <h1>Get In Touch</h1>
            <p className="contactdetails my-4">
                I’m currently looking for any work from home opportunity, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <button className="btn-hire mt-5" onClick={()=> onMail()}> Say Hello </button>
        </div>
    )
}
