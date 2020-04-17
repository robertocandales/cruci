import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import sha256 from 'crypto-js/sha256';

// my actions
import { password_reset } from '../../actions/authActions';
import { alert_set_cb } from '../../actions/alertActions';

// my components 
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import TextField from '../input/TextField';

import isEmpty from '../../utils/isEmpty';

class Reset extends Component {

    constructor () {
        super ();
        this.state = {
            password: '',
            password2: '',

            errors: {}
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);
    }

    componentDidMount () {
        if (this.props.auth.isAuthenticated)
            this.props.history.push ('/');
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) {
            this.setState ({ errors: nextProps.errors });
            if (nextProps.errors.server) this.props.alert_set_cb ('Something went wrong!', 'danger');
        } 
    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {
        e.preventDefault ();

        let password_hash = isEmpty (this.state.password) ? '' : sha256 (this.state.password).toString ();
        let password2_hash = isEmpty (this.state.password2) ? '' : sha256 (this.state.password2).toString ();

        let reset = {
            token: this.props.location.pathname.replace('/reset/', ''),
            password: password_hash,
            password2: password2_hash
        }

        this.props.password_reset (reset, this.props.history);
    }

    render () {
        let { errors } = this.state;

        return (
        <div>
            <Navbar />
            
            <div className="register-area d-flex">
                <div className="register-side-content bg-img reset-bg"></div> 

                <div className="register-content-wrapper d-flex align-items-center">
                    <div className="register-content">
                        <h1 className="main-light-purple">Reset Password</h1>
                        <hr></hr>
                        <p>Enter a new password for your account.</p>

                        <div className="register-form">
                            <form noValidate onSubmit={ this.onSubmit }>
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

                                <button type="submit" className="m-btn m-btn-theme m-btn-radius btn-lg w-100">Reset Password!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        );
    }

}

Reset.propTypes = {
    errors: PropTypes.object.isRequired,
    success: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    password_reset: PropTypes.func.isRequired,
    alert_set_cb: PropTypes.func.isRequired,
};
  
const mapStateToProps = state => ({
    errors: state.errors,
    success: state.success,
    auth: state.auth,
});
  
export default connect (mapStateToProps, { password_reset, alert_set_cb }) (withRouter (Reset));