import {
    GET_ROLE_ACTIONS,
} from '../actions/types';

const initialState = {
    actions: []
};

export default function (state = initialState, action) {

    switch (action.state) {
        case GET_ROLE_ACTIONS:
            return {
                ...state,
                actions: [action.payload, ...state.actions]
            }

        default: return state;
    }

}