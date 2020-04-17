import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import successReducer from './successReducer';
import alertReducer from './alertReducer';

import authReducer from './authReducer';
import profileReducer from './profileReducer';

import blogReducer from './blogReducer';
import healthReducer from './healthReducer';
import videosReducer from './videosReducer';

// import contactReducer from './contactReducer'

export default combineReducers ({

    errors: errorReducer,
    success: successReducer,
    alert: alertReducer,

    auth: authReducer,
    profile: profileReducer,

    blog: blogReducer,
    health: healthReducer,
    video: videosReducer

});