import React, { Component } from 'react';

// my components
import Navbar from '../../main/Navbar'
import Footer from '../../main/Footer';

class Post extends Component {

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

export default Post;