import { useState, useEffect } from 'react'
import React from 'react'
import Axios from 'axios'
import User from '../user/User'
import style from './userList.module.css'
import gif from './loading.gif'

export default function UserList() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async() => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const response2= await response.json();
        setData(response2)
        setLoading(false)
    }, [])

    return (
        <div className= {style.users}>
            {loading &&  <img id="img" className={style.loading} src={gif} alt="description of image"/>}
            {!loading && 
                data.map((user) => {
                    return <User key={user.id} phone={user.phone} email={user.email} name={user.name} website={user.website}></User>
                })
            }    
        
        </div>
    )
}
