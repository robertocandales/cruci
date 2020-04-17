import axios from 'axios';

import {
    ERRORS_GET,

    VIDEO_LOADING,
    VIDEO_GET_ALL,
    VIDEO_GET,
    VIDEO_ADD,
    VIDEO_DELETE 
} from './types';

import { errors_clear } from './errorActions';

// set loading state
export const video_set_loading = () => {

    return {
        type: VIDEO_LOADING
    };

};

// TODO: add diferent queries
// get all videos (pagination limited to 10)
export const video_get_all = () => dispatch => {

	dispatch (video_set_loading ());

	axios.get ('/api/videos/')
		.then (res => {
			dispatch ({
				type: VIDEO_GET_ALL,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: VIDEO_GET_ALL,
				payload: null
			})
		});

};

// get an specific video for display
export const video_get = id => dispatch => {

	dispatch (video_set_loading ());

	axios.get ('/api/videos/' + id)
		.then (res => {
			dispatch ({
				type: VIDEO_GET,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: VIDEO_GET,
				payload: null
			})
		});

};

// create a new video (only for admins)
export const video_add = video_data => dispatch => {

	dispatch (errors_clear ());

	axios.post ('/api/videos/', video_data)
		.then (res => {
			dispatch ({
				type: VIDEO_ADD,
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

// delete a video (only for admins)
export const video_delete = id => dispatch => {

	axios.delete ('/api/videos/' + id)
		.then (res => {
			dispatch ({
				type: VIDEO_DELETE,
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