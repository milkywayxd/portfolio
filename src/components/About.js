import React from "react";
import Footer from "./Footer";

function About (){
    return (
        <div>
    <div className="about_container">
        <div className="about_img_container">
        <img src="./images/about.jpg" alt="about_me" className="about_img"></img>
        </div>
        <div className="about_content">
            <h1 className="about_title">ABOUT ME</h1>
            <p><i>“The beautiful thing about learning is nobody can take it away from you.”
            <br/>— B.B. King</i></p>
            <p>Hi, I’m Dany, a passionate software developer with a solid foundation in both <b>iOS development</b> and <b>Full-Stack Web Development</b>. 
                Over the past two years, I’ve gained invaluable industry experience at <b>Australia Post</b>, where I primarily focused 
                on <b>iOS application development</b> and cross-tested the <b>Android application</b>. I have hands-on experience with the <b>MVVM architecture</b> and have built a strong understanding of the <b>Agile software development lifecycle.</b></p>
<p>The <b>programming languages</b> I have experience with include <b>Swift, JavaScript, TypeScript, Kotlin, Java, SQL, and C#</b>. I am also proficient in <b>HTML, CSS, and React</b>. I’m always eager to expand my knowledge and am open to learning new languages and skills to stay at the forefront of technology.</p>
<p>In addition, I recently completed a <b>Full-Stack Web Development Bootcamp</b>, which helped me broaden my expertise in <b>front-end</b> and <b>back-end development</b>, particularly with <b>React</b> and the <b>.NET Framework</b>. I now enjoy building responsive and functional web applications, 
and I’m excited to continue applying and growing these skills.</p>
<p>I believe <b>problem-solving</b> and <b>continuous learning</b> are the cornerstones of a successful software development career. Before diving into software development, 
    I worked as a <b>Qantas cabin crew member</b>, where I developed <b>transferable skills</b> that have shaped me both 
personally and professionally. Skills like <b>communication, teamwork, dependability, adaptability</b>, and <b>problem-solving</b> were key aspects of my job, 
and I’m proud of how they’ve helped me tackle challenges in high-pressure environments.</p>
<p>Providing customer service to people from all backgrounds has made me more empathetic and insightful when addressing users' needs.
    I can always understand diverse perspectives and am committed to delivering projects that are both <b>innovative</b> and <b>user-centered</b>.</p>
<p>I’m truly excited about the future of software development and look forward to continually growing as a developer 
and contributing to the world of technology.</p>
        </div>
    </div>
    <Footer/>
    </div>
    );
};

export default About;