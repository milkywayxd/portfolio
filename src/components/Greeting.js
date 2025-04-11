import React from "react";
import TypingEffect from './TypingEffect';
import { useNavigate } from "react-router-dom";

const Greeting = (props) => {
    const navigate = useNavigate();

    const handleAboutButtonClicked = () => {
        navigate('/about');
    };

    const handleContactButtonClicked = () =>{
        navigate('/contact');
    };
return (
    <div className="greeting_container">
        <div className="greeting_content">
    <h1 className="greeting_title">Hi! I'm Dany Cao</h1>
    <h2>IOS Developer | Software Engineer | Full Stack Developer</h2>
    <p className="summary">With two years of experience as an iOS Developer, 
        along with recent completion of a Full-Stack Web Development Bootcamp, 
        I am eager to apply my skills and continue to grow as a software engineer.
    </p>
    </div>
    <button
     className="greeting_button aboutButton" onClick={handleAboutButtonClicked}>{"About"}
     </button>
     <button
     className="greeting_button contactButton" onClick={handleContactButtonClicked}>{"Contact Me"}
     </button>
    
    </div>
);

};

export default Greeting;