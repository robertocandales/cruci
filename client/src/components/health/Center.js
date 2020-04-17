import React, { Component } from 'react';
import { connect } from 'react-redux';

// my components
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';

class Center extends Component {

    render () {
        return (
            <div>
                <Navbar />

                {/* NEW CODE GOES HERE! */}

                <Footer />
            </div>
        );
    }

}

export default Center;