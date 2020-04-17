import uuid from 'uuid';
import { ALERT_SET, ALERT_REMOVE } from './types';

export const alert_set = (msg, alert_type, timeout = 5000) => dispatch => {

    const id = uuid.v4 ();
    dispatch ({
        type: ALERT_SET,
        payload: { msg, alert_type, id }
    });

    setTimeout (() => dispatch ({ type: ALERT_REMOVE, payload: id }), timeout);
    
};

export const alert_set_cb = (msg, alert_type, timeout = 5000) => dispatch => {

    dispatch (alert_set (msg, alert_type, timeout));
    
};