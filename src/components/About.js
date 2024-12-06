//About.js 
import React from 'react'; 

import './style.css'; 



const About = () => { 
    return ( 
        <section id="about"
            className="container text-center"> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                   
                        About Me 
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src="./images/IMG_7836me.jpeg"
                            alt="just me."
                            className="img-fluid rounded-circle profile-image" /> 
                    </div> 
                    <p className="section-description mt-4"> 
                        I am a skilled Promineo Tech Certified developer with over 6 months of 
                        hands-on experience in full-stack web development. My 
                        expertise includes using technologies such as REACT, 
                        Java, MySQL, HTML, CSS, and Bootstrap. As a problem solver, 
                        I have successfully designed and developed user-friendly, 
                        responsive web applications. 
                    </p> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default About;
