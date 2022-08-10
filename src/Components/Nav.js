import React, { Component } from "react";
import {
    Link
} from 'react-router-dom'

class Nav extends Component {
    render() {
        let buttons;
        if (this.props.user) {
            buttons = <button onClick={()=>localStorage.removeItem('token')}>Log Out</button>
        }
        else {
            buttons = <>
                <Link to='/login2' className="login-btn">Login</Link>
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