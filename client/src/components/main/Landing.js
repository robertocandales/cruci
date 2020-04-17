import React, { Component } from 'react';

// my components
import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {
  
	render () {
		return (
		<div>
			<Navbar />

			<Footer />
		</div>
		);
	}
}

export default Landing;