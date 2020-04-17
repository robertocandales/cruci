import axios from 'axios';

import {
	ADD_POST,
	ERRORS_GET,
	CLEAR_ERRORS,
	GET_POSTS,
	GET_POST,
	POST_LOADING,
	DELETE_POST,

	POST_UPDATE_LIKES,
	POST_ADD_COMMENT,
	POST_REMOVE_COMMENT,
	POST_ERROR
} from './types';

import { errors_clear } from './errorActions';
import { alert_set } from './alertActions';

// set loading state
export const post_set_loading = () => {

	return {
		type: POST_LOADING
	};

};

// get all posts (pagination limited to 10)
export const post_get_all = () => dispatch => {

	dispatch (post_set_loading ());

	axios.get ('/api/blog/')
		.then (res => {
			dispatch ({
				type: GET_POSTS,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: GET_POSTS,
				payload: null
			})
		});

};

// get an specific post for display
export const post_get = id => dispatch => {

	dispatch (post_set_loading ());

	axios.get ('/api/blog/' + id)
		.then (res => {
			dispatch ({
				type: GET_POST,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: GET_POST,
				payload: null
			})
		});

};

// create a new post (only for admins)
export const post_create = post_data => dispatch => {

	dispatch (errors_clear ());

	axios.post ('/api/blog', post_data)
		.then (res => {
			dispatch ({
				type: ADD_POST,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: ERRORS_GET,
				payload: err.response.data
			})
		});

};

// delete a post (only for admins)
export const post_delete = id => dispatch => {

	axios.delete ('/api/blog/' + id)
		.then (res => {
			dispatch ({
				type: DELETE_POST,
				payload: id
			})
		})
		.catch (err => {
			dispatch ({
				type: ERRORS_GET,
				payload: err.response.data
			})
		});

};

/*** user interaction ***/

// a user can like a post
export const post_add_like = id => async dispatch => {

	try {
		const res = await axios.put ('/api/blog/' + id + '/like');

		dispatch ({
			type: POST_UPDATE_LIKES,
			payload: { id, likes: res.data }
		});
	}

	catch (err) {
		dispatch ({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}

};

// a user can remove his like from the post
export const post_remove_like = id => async dispatch => {

	try {
		const res = await axios.put ('/api/blog/' + id + '/unlike');

		dispatch ({
			type: POST_UPDATE_LIKES,
			payload: { id, likes: res.data }
		});
	}

	catch (err) {
		dispatch ({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}

};

// a user can add a comment in a post
export const post_add_comment = (post_id, comment_data) => async dispatch => {

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const res = await axios.post (
			'/api/blog/' + post_id + '/comment',
			comment_data,
			config
		);

		dispatch ({
			type: POST_ADD_COMMENT,
			payload: res.data
		});

		dispatch (alert_set ('Comment has been added!', 'success'));
	}

	catch (err) {
		dispatch ({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}

};

// a user can remove his own comments from a post
// also an admin can remove other user's comments
export const post_remove_comment = (post_id, comment_id) => async dispatch => {

	try {
		await axios.delete ('/api/blog/' + post_id + '/comment/' + comment_id);

		dispatch ({
			type: POST_REMOVE_COMMENT,
			payload: comment_id
		});

		dispatch (alert_set ('Comment has been removed!', 'success'));
	}

	catch (err) {
		dispatch ({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}

};