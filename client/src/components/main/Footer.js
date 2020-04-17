import React from 'react';

import { Link } from 'react-router-dom';

export default () => {
    
    return (
        <footer className="text-center page-footer dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h5>Get started</h5>
                        <ul>
                            <li><Link to="/" target="_top">Home</Link></li>
                            <li><Link to="/register" target="_top">Sign Up</Link></li>
                            <li><Link to="/login" target="_top">Login</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>About</h5>
                        <ul>
                            <li><Link to="/about" target="_top">About Us</Link></li>
                            <li><Link to="/contact" target="_top">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Support</h5>
                        <ul>
                            <li><Link to="/faq" target="_top">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h5>Legal</h5>
                        <ul>
                            <li><Link to="/privacy-policy" target="_top">Privacy Policy</Link></li>
                            <li><Link to="/cookies-policy" target="_top">Cookies Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright &copy; { new Date().getFullYear() } Ermiry</p>
            </div>
        </footer>
    );

};