import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact=()=> {
return(
    <div>
    <div className="contact_outline">
<div className="contact_container">
<div className="contact_content contact_item">
<h1 className="contact_title">Let's Chat.<br/> Tell me about your project.</h1>
<p>Let's create something together <i class="fa-solid fa-lightbulb"></i></p>
<div className="mail">
<a href="mailto:caoxiaodan@hotmail.com" className="email"><i class="fa-solid fa-envelope"></i> Mail me</a>
</div>
</div>
</div>
<div className="contact_form_container contact_item">
<ContactForm />
</div>
</div>
<Footer/>
</div>
);

};

export default Contact;