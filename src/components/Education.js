import React from "react";
import return_icon from '../assets/return_icon.webp'

const Education = ({onClick}) => {
return(
<div  id="section2" className="details_box">
<p className="subtitle">Education <i class="fa-solid fa-book"></i></p>
<p>SWINBURNE UNIVERSITY OF TECHNOLOGY, Hawthorn VIC</p>   
<h4>Graduate Diploma of Information Technology: Software Development, 2025 </h4>
<h4>Graduate Certificate of Information Technology: Software Development, 2020 - 2021 </h4>
<br/>
<p>SWINBURNE UNIVERSITY OF TECHNOLOGY, Hawthorn VIC </p>
<h4>Master of Accounting</h4>
<br/>
<p>MURDOCH UNIVERSITY, Perth WA </p>
<h4>Bachelor of Arts: Communication and Cultural Studies </h4>
<br/>
<a className="return_icon" onClick={onClick}>Return to top <i class="fa-solid fa-turn-up"></i></a>
</div>
);

};

export default Education;