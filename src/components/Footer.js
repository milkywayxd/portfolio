import React from "react";

const Footer =() => {
    return(
  <div className="footer_container">
    <div className="footer_icon">
    <a href="mailto:caoxiaodan@hotmail.com" className="icon_item"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://linkedin.com/in/xiaodan-cao" className="icon_item"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://github.com/milkywayxd" className="icon_item"><i class="fa-brands fa-github"></i></a>
    <a href="https://x.com/Xiaodan528585" className="icon_item"><i class="fa-brands fa-twitter"></i></a>
    </div>
    <div className="footer_content">
    <p>Designed in Figma and coded in Visual Studio Code by yours truly. Build with React, supported by Tomcat.</p> 
    <p>©  Xiaodan Cao 2025</p>
    </div>
  </div>
    );
};

export default Footer;