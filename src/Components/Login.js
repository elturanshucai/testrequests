import React, { useState } from "react";
import axios from 'axios';
import { user } from '../data';
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault();
        if (user.email === email && user.password === password) {
            const data = user;
            data.id = 1;
            axios.post('login2', data).then(res => localStorage.setItem('token', res.data))
            props.setLogin(true)
        }
        if(user.email === email && user.password === password){
            navigate('/user')
        }
        
    }


    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h3>Login</h3>

            <div className="email">
                <label>
                    <span>Email</span>
                    <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                </label>
            </div>
            <div className="password">
                <label>
                    <span>Password</span>
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </label>
            </div>

            <button className="lgn-btn">Login</button>
        </form>
    )
}

export default Login;