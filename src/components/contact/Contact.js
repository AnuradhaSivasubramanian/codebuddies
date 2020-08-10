import React from 'react'
import './contact.scss'
import twitter from '../../Asset/icons/twitter.svg'
import instagram from '../../Asset/icons/instagram.svg'
import linkedin from '../../Asset/icons/linkedin.svg'

function Contact() {


    return (
        <div className="contact-main">
            <div className="contact-icons"> 
           <a href="https://www.linkedin.com/in/lioliveiraz/"><img src={linkedin} alt="linkedin"/></a> 
           <a href="https://www.linkedin.com/in/anuradha-sivasubramanian/"><img src={linkedin} alt="linkedin"/></a> 
           <a href="https://twitter.com/buddies_code">   <img src={twitter} alt="twitter"/></a> 
           <a href="https://www.instagram.com/code.buddies/">  <img src={instagram} alt="instagram"/></a> 

    
            </div>
        <p>Copyrights <span>&#169;</span> 2020 CodeBuddies</p>
        </div>
    )
}

export default Contact
