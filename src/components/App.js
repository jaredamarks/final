//App.js 
import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import Header from './Header'; 
import About from './About'; 
import Projects from './Projects'; 
import Resume from './Resume'; 
import Contact from './Contact'; 
import Footer from './Footer'; 
import Skills from './Skills'; 
import GuestBook from './GuestBook';
import 'bootstrap/dist/js/bootstrap.bundle.min';



console.log("Rendering App component...");

function App() { 
return ( 
     
    <div className='mainPage'> 
        <Header /> 
        <Routes> 
        <Route path="/" element={<About />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/guestbook" element={<GuestBook />} />
        </Routes> 
        <Footer /> 
    </div> 
    
); 
} 

export default App; 
