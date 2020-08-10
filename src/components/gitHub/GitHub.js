import React from 'react'
import github from '../../Asset/icons/github.svg'
import "./gitHub.scss"

function gitHub() {
    return (
        <div className="gitHub--main">
       <a href="https://github.com/AnuradhaSivasubramanian/codebuddies"> <img src={github} alt="git hub icon"/> </a> 
        <p>Help us to build this page. Check our code and make add features to this page.</p> 
        </div>
    )
}

export default gitHub
