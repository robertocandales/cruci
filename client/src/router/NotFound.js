import React from 'react';

import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';

export default () => {
	return (
		<div>
			<Navbar />
			<div className="register-area d-flex">
				<div className="register-side-content bg-img not-found-bg"></div>

				<div className="register-content-wrapper d-flex align-items-center">
					<div className="register-content">
						<h2 className="main-light-purple">Page not found!</h2>
						<hr></hr>
						<h6 className="main-light-purple">We couldn't find any results for your search. Try again.</h6>
						<br></br>
						<a className="m-btn m-btn-theme m-btn-radius btn-lg w-100" target="_top"
							href="/">Back to Pixan</a>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};