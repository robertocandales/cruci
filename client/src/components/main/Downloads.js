import React, { Component } from 'react';

// my components
import Navbar from './Navbar';
import Footer from './Footer';

import Alert from '../common/Alert';

class Downloads extends Component {
  
    render() {
        return (
        <div>
        <Navbar />

        <div class="page blog-post-list">
            <Alert />
            
            <section class="clean-block clean-blog-list dark">
                <div class="container">
                    <div class="block-heading">
                        <h2 class="text-info">Downloads</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>

                    <div class="block-content">
                                                    
                    </div>
                </div>
            </section>
        </div>

        <Footer />
        </div>
        );
    }
}

export default Downloads;