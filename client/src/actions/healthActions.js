import axios from 'axios';

import {
    ERRORS_GET,

    HEALTH_CENTER_LOADING,
    HEALTH_CENTER_GET_ALL,
    HEALTH_CENTER_GET,
    HEALTH_CENTER_ADD,
    HEALTH_CENTER_DELETE 
} from './types';

import { errors_clear } from './errorActions';

// set loading state
export const health_center_set_loading = () => {

    return {
        type: HEALTH_CENTER_LOADING
    };

};

// TODO: add diferent queries
// get all health centers (pagination limited to 10)
export const health_center_get_all = () => dispatch => {

	dispatch (health_center_set_loading ());

	axios.get ('/api/health/')
		.then (res => {
			dispatch ({
				type: HEALTH_CENTER_GET_ALL,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: HEALTH_CENTER_GET_ALL,
				payload: null
			})
		});

};

// get an specific health center for display
export const health_center_get = id => dispatch => {

	dispatch (health_center_set_loading ());

	axios.get ('/api/health/' + id)
		.then (res => {
			dispatch ({
				type: HEALTH_CENTER_GET,
				payload: res.data
			})
		})
		.catch (err => {
			dispatch ({
				type: HEALTH_CENTER_GET,
				payload: null
			})
		});

};

// create a new health center (only for admins)
export const health_center_add = health_center_data => dispatch => {

	dispatch (errors_clear ());

	axios.post ('/api/health/', health_center_data)
		.then (res => {
			dispatch ({
				type: HEALTH_CENTER_ADD,
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

// delete a health center (only for admins)
export const health_center_delete = id => dispatch => {

	axios.delete ('/api/health/' + id)
		.then (res => {
			dispatch ({
				type: HEALTH_CENTER_DELETE,
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