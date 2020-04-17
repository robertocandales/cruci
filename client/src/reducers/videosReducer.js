import {
    VIDEO_LOADING,
    VIDEO_GET_ALL,
    VIDEO_GET,
    VIDEO_ADD,
    VIDEO_DELETE 
} from '../actions/types';

const initialState = {
    videos: null,
    video: null,
    loading: false,
    error: {}
};

export default function (state = initialState, action) {

    switch (action.type) {
        case VIDEO_LOADING:
            return {
                ...state,
                loading: true
            };

        case VIDEO_GET_ALL:
            return {
                ...state,
                videos: action.payload,
                loading: false
            };

        case VIDEO_GET:
            return {
                ...state,
				video: action.payload,
				loading: false
            }

        case VIDEO_ADD:
            return {
                ...state,
                videos: [action.payload, ...state.videos]
            };
    
        case VIDEO_DELETE:
            return {
                ...state,
                videos: state.videos.filter (video => video._id !== action.payload)
            };

        default: return state;
    }

}