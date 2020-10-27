import React from "react";
import "./Contact.css";

function Contact() {
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/95.jpg" alt="avatar"/>
        <div> 
            <p className="name">Alicia Willis</p> 
            <div className="status">
                <p className="status-online"></p>
                <p className="status-text">online</p>
            </div>
        </div>   


        </div>
    )

}


export default Contact;