import React, { Component } from 'react';

// my components
import Navbar from './Navbar';
import Footer from './Footer';

import Alert from '../common/Alert';

class Faq extends Component {
  
    render() {
        return (
        <div>
            <Navbar />

            {/* NEW CODE GOES HERE! */}
            
            <Footer />
        </div>
        );
    }
}

export default Faq;