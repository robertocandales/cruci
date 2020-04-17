import axios from 'axios';

import { ERRORS_GET } from './types';

import { errors_clear } from './errorActions';
import { alert_set } from './alertActions';

// post a new contact
export const contact_post = (data) => dispatch => {

    dispatch (errors_clear ());
    
    axios
        .post ('/api/common/contact', data)
        .then (res => {
            dispatch (alert_set ('Contact message has been sent!', 'success'));
        })
        .catch (err => 
            dispatch ({
                type: ERRORS_GET,
                payload: err.response.data
            }));

}