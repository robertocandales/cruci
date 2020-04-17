import React, { Component } from 'react';

// react router
import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// main components
import Landing from './components/main/Landing';
import Contact from './components/main/Contact';

// auth components
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Forgot from './components/auth/Forgot';
import Reset from './components/auth/Reset';
import Confirmation from './components/auth/Confirmation';

// second components
// import Videos from './components/main/Videos';
// import Downloads from './components/main/Downloads';
// import Reviews from './components/main/Reviews';
// import Faq from './components/main/Faq';

// blog components
import Blog from './components/blog/Blog';
import Post from './components/blog/post/Post';

// health center components
import Health from './components/health/Health';
import Center from './components/health/Center';

import NotFound from './router/NotFound'
// import PrivateRoute from './router/PrivateRoute';

// my actions
import { user_token_check } from './actions/authActions';

user_token_check (store);

class App extends Component {

	render () {
		return (
			<Provider store= { store }>
				<Router>
					<div className="App">
						<Switch>
							{/* Main */}
							<Route exact path='/' component={ Landing } />
							<Route exact path="/contact" component={ Contact } />

							{/* Auth */}
							<Route exact path="/register" component={ Register } />
							<Route exact path="/login" component={ Login } />
							<Route exact path="/forgot" component={ Forgot } />
							<Route exact path="/reset/:id" component={ Reset } />
							<Route exact path="/confirmation" component={ Confirmation } />

							{/* <Route exact path="/videos" component={ Videos } /> */}
							{/* <Route exact path="/downloads" component={ Downloads } /> */}
							{/* <Route exact path="/reviews" component={ Reviews } /> */}
							{/* <Route exact path="/faq" component={ Faq } /> */}

							{/* Blog */}
							<Route exact path="/blog" component={ Blog } />
							<Route exact path="/blog/:id" component={ Post } />

							{/* Health Centers */}
							<Route exact path="/health" component={ Health } />
							<Route exact path="/health/:id" component={ Center } />

							{/* Other */}
							<Route exact path='/404' component={ NotFound } />
							<Redirect to="/404" />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}

}

export default App;