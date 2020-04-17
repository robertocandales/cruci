import {
    HEALTH_CENTER_LOADING,
    HEALTH_CENTER_GET_ALL,
    HEALTH_CENTER_GET,
    HEALTH_CENTER_ADD,
    HEALTH_CENTER_DELETE 
} from '../actions/types';

const initialState = {
    centers: null,
    center: null,
    loading: false,
    error: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case HEALTH_CENTER_LOADING:
            return {
                ...state,
                loading: true
            };

        case HEALTH_CENTER_GET_ALL:
            return {
                ...state,
                centers: action.payload,
                loading: false
            };

        case HEALTH_CENTER_GET:
            return {
                ...state,
				center: action.payload,
				loading: false
            }

        case HEALTH_CENTER_ADD:
            return {
                ...state,
                centers: [action.payload, ...state.centers]
            };
    
        case HEALTH_CENTER_DELETE:
            return {
                ...state,
                centers: state.centers.filter (center => center._id !== action.payload)
            };

        default: return state;
    }

}