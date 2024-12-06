// Skills.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode, faLaptopCode } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import { faBootstrap, faCss3, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => { 
    return ( 
        <section id="skills"
            className="container"
            style={{ paddingLeft: '0px' }}> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCogs} 
                    className="mr-2" /> 
                Skills 
            </h2> 
            <ul className="skills-list"> 
                <li> 
                    <FontAwesomeIcon icon={faHtml5} 
                        className="mr-2" /> 
                    HTML 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faCss3} 
                        className="mr-2" /> 
                    CSS 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faCode} 
                        className="mr-2" /> 
                    JavaScript 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faReact} 
                        className="mr-2" /> 
                    React 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faBootstrap} 
                        className="mr-2" /> 
                    Bootstrap 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faCode} 
                        className="mr-2" /> 
                    mySQL Server
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    Spring Boot
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faPython} 
                        className="mr-2" /> 
                    Python 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faJava} 
                        className="mr-2" /> 
                    Java 
                </li> 
                {/* Add more skills as needed */} 
            </ul> 
        </section> 
    ); 
}; 

export default Skills;
