import React from "react";

const MySkills = ({skills}) => {
return (
    <ul className="skillList">
    {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
    ))}
    </ul>
);
};

export default MySkills;