import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLink = (props) => {
    return (
        <ul className="right">
            <li><a href='#' onClick={ () => props.signOut() } >Sign Out</a></li>
            <li><NavLink to='/createproduct'>Add product</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>TP</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink);