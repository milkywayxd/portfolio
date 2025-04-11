import React from "react";
import MySkills from "./MySkills";


const ProfessionalExperience = ({onClick}) => {

  const iOSskills = ['Swift (UIKit and SwiftUI)', 'Kotlin','Git',
    'Jira', 'Confluence','Agile','Postman','Charles','Simulator','Testflight',
    'Xcode', 'CocoaPods'
];
  const qantasSkills = [];

return (
  <div  id="section1" className="details_box">
  <p className="subtitle">Profesional Experience  <i class="fa-solid fa-rocket"></i></p>
  <div>
  <h4>Graduate Software Engineer &#8226; Australia Post </h4>
  <p>2022-2024</p>
  <p className="long_text">During my time at Australia Post, 
  During my time at Australia Post, I worked on the AusPost mobile application with a primary focus on <b>iOS development</b>. 
  My responsibilities included implementing new features, building user interfaces (UI) using both <b>UIKit</b> and <b>SwiftUI</b>, <b>debugging</b>, <b>deploying the application</b>, <b>integrating APIs</b>, and handling errors. 
  I gained hands-on experience with the <b>MVVM architecture</b> and developed a solid understanding of the <b>Agile</b> software development lifecycle. 
  Collaborating closely with the Delivery Lead, Business Analyst, Designer, and senior developers, 
  I contributed to delivering high-quality software within project deadlines.
  </p>
  <MySkills skills={iOSskills} />
  </div>
  
  <h4>Cabin Crew &#8226; Qantas Airways </h4>
  <p>2006-2022</p>
  <p className="long_text">Throughout my career at Qantas, I demonstrated a strong commitment to ensuring a positive and memorable 
    experience for passengers. Whether by actively listening to their needs, resolving concerns promptly, 
    or offering personalized assistance, I always went above and beyond to exceed expectations. 
    My experience has taught me to remain calm under pressure and to handle high-stress situations 
    while maintaining professionalism and attention to detail.
  </p>
  <br/>
  <a className="return_icon" onClick={onClick}>Return to top <i class="fa-solid fa-turn-up"></i></a>
  </div>
);
};

export default ProfessionalExperience;

