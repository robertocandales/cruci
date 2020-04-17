import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// my actions
import { user_confirmation } from '../../actions/authActions';

// my components 
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';

class Confirmation extends Component {

    componentDidMount () {
        let params = new URLSearchParams (this.props.location.search);
        this.props.user_confirmation (params.get ('email'), params.get ('token'));
    }

    render () {
        return (
        <div>
            <Navbar />
            
            <div className="register-area d-flex">
                { this.props.errors.server &&
                    <div className="register-side-content bg-img error-bg"></div> 
                }

                { this.props.success.server && 
                    <div className="register-side-content bg-img success-bg"></div> 
                }

                <div className="register-content-wrapper d-flex align-items-center">
                    <div className="register-content">
                        { this.props.errors.server &&
                            <div>
                                <h1 className="text-danger">Something has gone wrong!</h1>
                                <hr></hr>
                                <h6 className="gray-text">The link you entered is invalid!</h6>
                                <br></br>
                                <button className="m-btn m-btn-theme m-btn-radius btn-lg w-100">Send me a new link</button>
                                <br></br>
                                <br></br>
                                <a className="m-btn m-btn-theme m-btn-radius btn-lg w-100" target="_top"
                                    href="/">Back</a>
                            </div>
                        }

                        { this.props.success.server &&
                            <div>
                                <h1 className="main-light-purple">Success Confirmation!</h1>
                                <hr></hr>
                                <p>Your account is ready to go!</p>
                                <a className="m-btn m-btn-theme m-btn-radius btn-lg w-100" target="_top"
                                    href="/">Back</a>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        );
    }

}

Confirmation.propTypes = {
    errors: PropTypes.object.isRequired,
    success: PropTypes.object.isRequired,
    user_confirmation: PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
    errors: state.errors,
    success: state.success,
});
  
export default connect (mapStateToProps, { user_confirmation }) (withRouter (Confirmation));