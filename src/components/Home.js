import Greeting from './Greeting';
import Headshot from './Headshot';
import Navbar from './Navbar';
import FeatureBox from './FeatureBox';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';
import Projects from './Projects';
import { useState } from 'react';
import Footer from './Footer';


function Home () {

const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align to the top of the section
      });
    }
  };

   const handleReturnSectionToOriginal = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.height ='auto';
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling animation
    });
  };
 
  return (
    <div className='app_container'>
    <div className='main_content'>
    <div className='greeting'>
    <Greeting />
    <Headshot />
    </div>

<div className='feature_div'>
<div className='feature_container'>
<FeatureBox icon='/images/work.png' title='Professional Experience' 
content='Explore the Roles That Have Shaped My Professional Journey and How They Can Benefit Your Business'onClick= {(e) => { e.preventDefault(); handleScrollToSection('section1'); }} />
<FeatureBox icon='/images/study.png' title='Education' 
content='Transform Your Ideas with My Knowledge - Learn About My Academic Background' onClick= {(e) => { e.preventDefault(); handleScrollToSection('section2'); }}/>
<FeatureBox icon='/images/projects.png' title='Projects' 
content='See What is Possible When We Combine Creativity with Strategy. Discover the Projects I have worked on' onClick= {(e) => { e.preventDefault(); handleScrollToSection('section3'); }}/>
</div>
</div>

<div className='details_container'> 
<ProfessionalExperience id="section1" onClick={() =>{scrollToTop(); handleReturnSectionToOriginal('section1');}}/>   
<Education id="section2" onClick={() =>{scrollToTop(); handleReturnSectionToOriginal('section2');}}/>
<Projects id="section3" onClick={() =>{scrollToTop(); handleReturnSectionToOriginal('section3');}}/>
</div>
</div>
<Footer/>
</div>

  );

};

export default Home;