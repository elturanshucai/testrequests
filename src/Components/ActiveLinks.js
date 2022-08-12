import React from "react";
import {NavLink} from "react-router-dom"
function ActiveLinks(){
    return (
        <nav className="testNavs">
            <NavLink exact to="/home" >Home</NavLink>  
            <NavLink exact to="/about" >About</NavLink>  
            <NavLink exact to="/me" >Me</NavLink>
        </nav>
    )
}

export default ActiveLinks