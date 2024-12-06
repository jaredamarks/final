// Contact.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faGithub } 
    from '@fortawesome/free-brands-svg-icons'; 
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Contact = () => { 
    const breadcrumbsPaths = 
        [ 
            { title: 'Home', to: '/' }, 
            { title: 'Contact', to: '/contact' } 
        ]; 

    return ( 
        <section id="contact" className="container"> 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <h2 className="section-title">Contact</h2> 
            <p className="section-description"> 
                Feel free to reach out for
                collaboration or inquiries. 
            </p> 
            <ul className="contact-list list-unstyled"> 
                <li> 
                    
                    <a href="mailto:marksjared@icloud.com">
                <FontAwesomeIcon icon={faEnvelope} 
                        className="contact-icon" /> 
                    marksjared@icloud.com 
                    </a>
                    
                </li> 
                <li> 
                    <a href="https://www.linkedin.com/in/jared-marks-a16b552a1">
                    <FontAwesomeIcon icon={faLinkedin} 
                        className="contact-icon" /> 
                        LinkedIn 
                    </a>
                </li> 
                <li> 
                    <a href="https://github.com/jaredamarks">
                    <FontAwesomeIcon icon={faGithub} 
                        className="contact-icon" /> 
                    GitHub
                    </a> 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faPhone} 
                        className="contact-icon" /> 
                    (661)***-***** 
                </li> 
            </ul> 
        </section> 
    ); 
}; 

export default Contact;
