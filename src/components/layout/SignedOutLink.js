import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    );
}

export default SignedOutLink;