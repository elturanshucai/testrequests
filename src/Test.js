import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Test() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios.get('user').then(res => setUser(res.data))
    }, [])
    return (
        <>
            {
                user ?
                    <>
                        <div>user</div>
                        <div>{user?.name}</div>
                    </>:null
            }

        </>

    )
}