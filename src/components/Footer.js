// Footer.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter } 
    from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; // Import your custom CSS file 


const Footer = () => { 
return ( 
    <footer className="footer"> 
    <div className="container"> 
        <div className="row"> 
        <div className="col-md-4 my-auto"> 
            <p>© 2024 Jared A Marks. All rights reserved.</p> 
        </div> 
        <div className="col-md-6 text-md-right"> 
            <ul className="social-icons list-unstyled"> 
            <li> 
                <a 
href="https://linkedin.com/in/jared-marks-a16b552a1" target="_blank" rel="noopener noreferrer"> 
                <FontAwesomeIcon icon={faLinkedin} /> 
                </a> 
            </li> 
            <li> 
                <a href= 
"https://github.com/jaredamarks" target="_blank" rel="noopener noreferrer"> 
                <FontAwesomeIcon icon={faGithub} /> 
                </a> 
            </li> 
            <li> 
                <a href= 
"https://x.com/jaredamark89526" target="_blank" rel="noopener noreferrer"> 
                <FontAwesomeIcon icon={faTwitter} /> 
                </a> 
            </li> 
            </ul> 
        </div> 
        </div> 
    </div> 
    </footer> 
); 
}; 

export default Footer;
