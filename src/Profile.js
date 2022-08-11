import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Profile() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios.get('user').then(res => setUser(res.data))
    })

    const fn=(l)=>{
        let element=''
        for(let i=1; i<=l; i++){
            element+="*"
        }
        return element
    }
    return (
        <>
            {
                user ?
                    <>
                        <div className="profile">
                            <h1>{user.first_name} {user.last_name}</h1>
                            <h3>{user.age} years old</h3>
                            <p>{user.email}</p>
                            <p>Birthday : {user.birthDay}</p>
                            <div className="skills">
                                {user.skills.map((item, index)=>(
                                    <div className="skil" key={index}>
                                        <div className="skilname">{item.skilName}</div>
                                        <div className="level">
                                            {
                                               fn(item.level)
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <footer>
                                <a href={'http://' + user.github}>GitHub</a>
                            </footer>
                        </div>
                    </>
                    :
                    <div>User not found</div>
            }
        </>

    )
}