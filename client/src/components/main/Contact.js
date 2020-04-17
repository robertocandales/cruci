import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// my components 
import Navbar from './Navbar';
import Footer from './Footer';
import TextField from '../input/TextField';
import TextArea from '../input/TextArea';

// my actions
import { contact_post } from '../../actions/commonActions';

class Contact extends Component {

    constructor () {
        super ();
        this.state = {
            name: '',
            email: '',
            subject: '',
            msg: '',

            errors: {}
        }

        this.onChange = this.onChange.bind (this);
        this.onSubmit = this.onSubmit.bind (this);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.errors) this.setState ({ errors: nextProps.errors });
        if (nextProps.success) this.setState ({ subject: '', msg: '' });
    }

    onChange (e) { this.setState ({ [e.target.name]: e.target.value }); }

    onSubmit (e) {
        e.preventDefault ();

        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            msg: this.state.msg
        }

        this.props.contact_post (data);
    }
  
    render () {
        let { errors } = this.state;

        return (
        <div>
            <Navbar />

            <div className="register-area d-flex">
                <div className="register-side-content bg-img contact-bg"></div>

                <div className="register-content-wrapper d-flex align-items-center">
                    <div className="register-content">
                        <h1 className="main-light-purple">Contact Us!</h1>
                        <hr></hr>
                        <h6 className="main-light-purple">If you have any idea, question, or whatever, send us a message.</h6>
                        <br></br>

                        <div className="register-form">
                            <form noValidate onSubmit={ this.onSubmit }>
                                <TextField 
                                    icon="fas fa-user"
                                    placeholder="Full Name"
                                    name="name"
                                    type="text"
                                    value={ this.state.name }
                                    onChange={ this.onChange }
                                    error={ errors.name }
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
                                    icon="fas fa-sticky-note"
                                    placeholder="Subject"
                                    name="subject"
                                    type="text"
                                    value={ this.state.subject }
                                    onChange={ this.onChange }
                                    error={ errors.subject }
                                />
                                <TextArea
                                    icon="fas fa-pen-square"
                                    cols="30" rows="10"
                                    placeholder="Your Message"
                                    name="msg"
                                    value={ this.state.msg }
                                    onChange={ this.onChange }
                                    error={ errors.msg }
                                />
                                <button type="submit" className="m-btn m-btn-theme m-btn-radius btn-lg w-100"><i className="fas fa-paper-plane"></i> Send!</button>
                            </form>
                        </div>

                        {/* FIXME: */}
                        {/* <hr></hr>
                        <h3 className="main-light-purple">You can also write us here:</h3>
                         */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
        );
    }
}

Contact.propTypes = {
    errors: PropTypes.object.isRequired,
    success: PropTypes.object.isRequired,
    contact_post: PropTypes.func.isRequired,
};
  
const mapStateToProps = state => ({
    errors: state.errors,
    success: state.success
});
  
export default connect (mapStateToProps, { contact_post }) (Contact);