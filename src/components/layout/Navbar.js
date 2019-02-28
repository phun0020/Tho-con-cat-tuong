import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import { connect } from 'react-redux';
import '../../index.css';

const NavBar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLink/> : <SignedOutLink />
    return (
        <nav className="nav-wrapper gradient-45deg-indigo-purple">
            <div className="container">
                <Link to='/' className='brand-logo'>Tho con's Dashboard</Link>
                { links }
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);