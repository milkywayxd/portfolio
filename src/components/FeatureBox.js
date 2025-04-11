import React from "react";

function FeatureBox({icon, title, content, onClick}) {

return(  
<div className="feature_box" >
<img src= {icon} alt="work icon" className="feature_icon" />
<a href= "#!" onClick={onClick}>{title}</a>
<p className="feature_content">{content}</p>
</div>
);
    
}

export default FeatureBox;