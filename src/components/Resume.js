// Resume.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faFileDownload } 
    from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import Skills from './Skills'; 
import './style.css'; 
import { Link } from 'react-router-dom'; 

const Resume = () => { 
    const breadcrumbsPaths = 
        [ 
            { title: 'Home', to: '/' }, 
            { title: 'Resume', to: '/resume' } 
        ]; 

    return ( 
        <section id="resume"
            className="container text-center"> 
            {/* Include the Breadcrumbs component */} 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <div className="row justify-content-center align-items-center"> 
                <div className="col-md-8"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faFileDownload} 
                            className="mr-2" /> 
                        Resume 
                    </h2> 
                    <p className="section-description"> 
                        Download my resume to learn more 
                        about my professional experience and skills. 
                    </p> 
                    <Link to="./src/resume.pdf" target="_blank" download> Download File </Link>
                    {/* Include the Skills component here */} 
                    <Skills /> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Resume;
