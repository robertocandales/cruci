import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// my actions
import { password_forgot } from '../../actions/authActions';

// my components 
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import TextField from '../input/TextField';

class Forgot extends Component {

    constructor () {
        super ();
        this.state = {
            email: '',
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
        if (nextProps.errors) this.setState ({ errors: nextProps.errors });
        if (nextProps.success) this.setState ({ email: '' });
    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {
        e.preventDefault ();

        let data = { email: this.state.email };
        this.props.password_forgot (data);
    }

    render () {
        let { errors } = this.state;

        return (
        <div>
            <Navbar />
            
            <div className="register-area d-flex">
                <div className="register-content-wrapper d-flex align-items-center">
                    <div className="register-content">
                        <h1 className="main-light-purple">Forgot your Password?</h1>
                        <hr></hr>
                        <p>Enter the email address associated with your account.</p>

                        <div className="register-form">
                            <form noValidate onSubmit={ this.onSubmit }>
                                <TextField 
                                    icon="fas fa-at"
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    value={ this.state.email }
                                    onChange={ this.onChange }
                                    error={ errors.email }
                                />

                                <button type="submit" className="m-btn m-btn-theme m-btn-radius btn-lg w-100">Get reset link</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="register-side-content bg-img forgot-bg"></div> 
            </div>

            <Footer />
        </div>
        );
    }

}

Forgot.propTypes = {
    errors: PropTypes.object.isRequired,
    success: PropTypes.object.isRequired,
    password_forgot: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
  
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    success: state.success,
});
  
export default connect (mapStateToProps, { password_forgot }) (Forgot);