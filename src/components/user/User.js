import React from 'react'
import PropTypes from 'prop-types'
import style from './user.module.css'

export default function User({name, phone, email, website}) {
    return (
        <div className={style.user}>

            <div>Name: {name}</div>

            <div>Phone Number: {phone}</div>

            <div>Email: {email}</div>

            <div>Website: {website}</div>
        </div>
    )
}
User.propTypes = {
    name: PropTypes.string,

    phone: PropTypes.string,

    email: PropTypes.string,
    
    website: PropTypes.string,
}
