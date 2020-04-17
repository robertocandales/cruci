import axios from 'axios';

import {
    GET_PROFILE,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
} from './types';

// get user's profile (the jwt is used for this)
export const profile_get = () => dispatch => {

    dispatch (profile_set_loading ());
    axios.get ('api/users/profile')
		.then (res => 
			dispatch ({
				type: GET_PROFILE,
				payload: res.data
			}))	
		.catch (err => 
			dispatch ({
				type: GET_PROFILE,
				payload: null
			}));

};

// profile loading
export const profile_set_loading = () => {
    return {
        type: PROFILE_LOADING
    };
};
  
// clear profile
export const profile_clear_current = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};