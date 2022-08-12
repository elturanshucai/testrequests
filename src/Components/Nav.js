import React, { Component } from "react";
import {
    Link
} from 'react-router-dom'

class Nav extends Component {
    logout=()=>{
        localStorage.removeItem('token')
        this.props.setLogin(false)
    }
    render() {
        let buttons;
        if (this.props.login) {
            buttons = <>
            <Link to='/user' className="login-btn">Profile</Link>
            <Link to='/' onClick={this.logout} className="log-out-btn">Log Out</Link>
            </>
            
            
        }
        else {
            buttons = <>
                <Link to='/user' className="login-btn">Login</Link>
                <Link to='/register' className="register-btn">Sign In</Link>
            </>
        }
        return (
            <div className="header">
                <nav>
                    <Link to='/' className="home-btn">Home</Link>
                </nav>
                <nav>
                    {buttons}
                </nav>
            </div>
        )
    }
}

export default Nav;