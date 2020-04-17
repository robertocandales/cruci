import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Alert from '../common/Alert';

// my actions
import { user_logout } from '../../actions/authActions';
import { profile_clear_current } from '../../actions/profilesActions';

class Navbar extends Component {

    onLogOutClick (e) {

        e.preventDefault ();
        this.props.profile_clear_current ();
        this.props.user_logout ();

    }

    render () {
        let { isAuthenticated } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="navbar-brand dropdown-toggle text-white" 
                    data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" target="_top">
                        My Account</a>
                    <div className="dropdown-menu dropdown-menu-right main-light-purple-background">
                        <a className="dropdown-item text-white" href="/profile" target="_top">
                            Profile <i className="fas fa-user float-right"></i>
                        </a>
                        <a className="dropdown-item text-white" href="/dashboard" target="_top">
                            Dashboard <i className="fas fa-home float-right"></i>
                        </a>
                        <a className="dropdown-item text-white" href="/settings" target="_top">
                            Settings <i className="fas fa-cog float-right"></i>
                        </a>
                        <div className="dropdown-divider"></div>
                        <div className="nav-item">
                            <a href="/" onClick={ this.onLogOutClick.bind (this) } 
                            className="dropdown-item text-white">
                                Logout <i className="fas fa-sign-out-alt float-right"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="navbar-brand text-white" to="/register" target="_top">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand text-white" to="/login" target="_top">Login</Link>
                </li>
            </ul>
        );

        return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark main-light-purple-background">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" target="_top">
                        Pixan
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="navbar-brand text-white" href="/about" target="_top">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand text-white" href="/health" target="_top">Health Centers</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand text-white" href="/blog" target="_top">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand text-white" href="/contact" target="_top">Contact</a>
                            </li>
                        </ul>
                
                        { isAuthenticated ? authLinks : guestLinks }
                    </div>
                </div>
            </nav>

            <Alert />
        </div>
        );
    }

}

Navbar.propTypes = {
    user_logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect (mapStateToProps, { user_logout, profile_clear_current }) (
    Navbar
);