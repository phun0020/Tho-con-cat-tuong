import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    const errorMessage = authError ? authError.message : '';
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="container row mt-5">
        <form onSubmit={ this.handleSubmit } className="col s12 m6 offset-m3">
          <h5 className="grey-text text-darken-3 center-align">SIGN IN</h5>
          <div className="input-field">
            <i class="material-icons prefix">face</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
          <i class="material-icons prefix">lock</i>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange } />
          </div>
          <div className="input-field row">
            <p className="col s6">I accept to the <Link to='#!'>Terms &amp; Privacy Policy</Link></p>
          </div>
          <div className="input-field">
            <button className="btn pink gradient-45deg-light-blue-cyan full-width">Login</button>
            <span className="red-text">&nbsp;{ errorMessage }</span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
