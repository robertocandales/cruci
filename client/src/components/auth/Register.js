import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import sha256 from 'crypto-js/sha256';

// my actions
import { user_register } from '../../actions/authActions';

// my components 
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import TextField from '../input/TextField';

import isEmpty from '../../utils/isEmpty';

class Register extends Component {

    constructor () {
        super ();
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            password2: '',

            errors: {}
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);
    }

    componentDidMount () {
        if (this.props.auth.isAuthenticated)
            this.props.history.push ('/profile');
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            // console.log (nextProps.errors);
            this.setState ({ errors: nextProps.errors });
        }
    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {
        e.preventDefault ();

        let password_hash = isEmpty (this.state.password) ? '' : sha256 (this.state.password).toString ();
        let password2_hash = isEmpty (this.state.password2) ? '' : sha256 (this.state.password2).toString ();

        let new_user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: password_hash,
            password2: password2_hash
        }

        this.props.user_register (new_user, this.props.history);
    }

    render () {
        let { errors } = this.state;

        return (
        <div>
            <Navbar />

            <div className="register-area d-flex">
                <div className="register-content-wrapper d-flex align-items-center">
                    <div className="register-content">
                        <h1 className="main-light-purple">Create your free account</h1>
                        <hr></hr>
                        <p>Already hava an account? <Link className="main-light-purple" to="/login" target="_top">Login!</Link></p>

                        <div className="register-form">
                            <form noValidate onSubmit={ this.onSubmit }>
                                <TextField 
                                    icon="fas fa-user"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    value={ this.state.name }
                                    onChange={ this.onChange }
                                    error={ errors.name }
                                />
                                <TextField
                                    icon="fas fa-user-circle" 
                                    placeholder="Username"
                                    name="username"
                                    type="text"
                                    value={ this.state.username }
                                    onChange={ this.onChange }
                                    error={ errors.username }
                                />
                                <TextField
                                    icon="fas fa-at" 
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    value={ this.state.email }
                                    onChange={ this.onChange }
                                    error={ errors.email }
                                />
                                <TextField 
                                    icon="fas fa-lock"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={ this.state.password }
                                    onChange={ this.onChange }
                                    error={ errors.password }
                                />
                                <TextField 
                                    icon="fas fa-check-circle"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    type="password"
                                    value={ this.state.password2 }
                                    onChange={ this.onChange }
                                    error={ errors.password2 }
                                />
                                <button type="submit" className="m-btn m-btn-theme m-btn-radius btn-lg w-100"><i className="fas fa-sign-in-alt"></i> Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="register-side-content bg-img register-bg"></div>
            </div>

            <Footer />
        </div>
        );
    }

}

Register.propTypes = {
    user_register: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect (mapStateToProps, { user_register }) (withRouter (Register));