import React from "react";
import return_icon from '../assets/return_icon.webp'

const Projects = ({onClick}) => {
    return(
    <div  id="section3" className="details_box">
         <p className="subtitle">Projects <i class="fa-solid fa-diagram-project"></i></p>
            <h4>Car Parking System </h4> 
            <p>This project involves the development of a simple <b>Console (Text Based) User Interface application</b> designed to manage car parking 
            slots at a company parking site. The system enables users to efficiently 
                manage parking spaces for both staff and visitors, allowing for seamless tracking and maintenance of 
                availability.</p>
            <p>The process begins by establishing a car park, where the user is prompted to specify the number of parking 
                slots for staff and visitors. Once the car park is established, the system provides a menu with the following options:
            </p>
            <ul className="list">
                <li><b>List all slots</b>: Display all parking slots in a well-defined format, including slot ID, slot type (staff or visitor), 
                occupancy status, and if occupied, the car's registration number and owner's information.</li>
                <li><b>Park a car</b>: Allow users to park a car by providing a slot ID along with the car's registration number and owner details.</li>
                <li><b>Find a car</b>: Enable users to search for a car by its registration number and display the corresponding slot ID and owner's details if the car is parked.</li>
                <li><b>Add a parking slot</b>: Users can add new parking slots by providing the necessary information (slot ID, type, etc.).</li>
                <li><b>Delete a parking slot</b>: Users can delete a parking slot by slot ID, but only if the slot is not currently occupied.</li>
                <li><b>Remove a car</b>: Allows users to remove a car from a slot using the car's registration number.</li>
                <li><b>Exit</b>: Exit the application.</li>
                </ul>    
            <p>
                The system is developed using <b>Java</b> programming language and offers a simple, text-based interface for user interaction. 
            </p>
            <a href="https://github.com/milkywayxd/parkingSpotSystemConsole" className="project_link">GitHub Link <i class="fa-brands fa-github"></i></a>
            <hr />            
            <h4>Community Garden</h4>
            <p className="long_text">This project involved the development of a landing page for a community garden website aimed at introducing the public to 
                the services and opportunities offered by the garden, while encouraging social interaction and engagement within the community. 
            </p>
             <p className="long_text">Built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, the website provides an accessible and visually engaging platform for users to explore the offerings of the community garden. 
                The design is focused on <b>user-friendliness</b> and <b>responsiveness</b> to ensure a smooth experience across various devices. JavaScript is integrated to enhance interactivity.
            </p> 
             <p className="long_text">The website is deployed on a <b>Tomcat server</b>, ensuring reliable performance and scalability. 
             <a href="http://dany.breezebus.uk/community-garden/" >Visit Website <i class="fa-solid fa-up-right-from-square"></i></a>  
             <a href="https://github.com/milkywayxd/community-garden" className="project_link">GitHub Link <i class="fa-brands fa-github"></i></a>
             </p>
             <hr></hr>
            {/* <h4>Weather Application</h4> */}
            <h4>Mooc</h4>
            <p className="long_text">The <b>Admin Management System backend</b> was developed to provide a secure, scalable, 
                and maintainable infrastructure for managing administrative tasks and business logic. Built using <b>.NET (ASP.NET Core)</b> and the <b>C# </b> programming language, 
                the backend features a set of <b>RESTful APIs</b>, comprehensive <b>database management</b>, 
                robust <b>user authentication</b>, and essential <b>server-side functionalities</b>.
            </p>
             <p className="long_text">The system uses <b>SQLite</b> as its database, offering a lightweight yet efficient solution 
                for data storage and management. <b>SourceTree</b> was utilized for version control, facilitating effective team 
                collaboration and streamlined development workflows.
            </p> 
             <p className="long_text"> This project was developed by a team, with responsibilities distributed across various modules. 
                My contributions focused on implementing the <b>user login functionality</b>, which included  <b>secure authentication processes, 
                validation</b>, and the generation of  <b>JSON Web Tokens (JWT)</b> for session management. This ensures that only authorized users 
                can access protected resources within the system.
           </p>
             <a href="https://github.com/MoocDevTeam/Admin-Management-System-Backend" className="project_link">GitHub Link <i class="fa-brands fa-github"></i></a>
        <a className="return_icon" onClick={onClick}>Return to top <i class="fa-solid fa-turn-up"></i></a>
     </div>
    );
};

export default Projects;