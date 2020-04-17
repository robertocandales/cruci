import {
	ADD_POST,
	GET_POSTS,
	GET_POST,
	DELETE_POST,
	POST_LOADING,

	POST_UPDATE_LIKES,
	POST_ADD_COMMENT,
	POST_REMOVE_COMMENT,
	POST_ERROR
} from '../actions/types';
  
const initialState = {
	posts: null,
	post: null,
	loading: false,
	error: {}
};
  
export default function (state = initialState, action) {
	
	switch (action.type) {
		case POST_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case POST_LOADING:
			return {
				...state,
				loading: true
			};

		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};

		case GET_POST:
			return {
				...state,
				post: action.payload,
				loading: false
			};

		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts]
			};

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter (post => post._id !== action.payload)
			};

		case POST_UPDATE_LIKES:
			return {
				...state,
				posts: state.posts.map (post =>
					post._id === action.payload.id ? { ...post, likes: action.payload.likes } : post
				),
				loading: false
			};

		case POST_ADD_COMMENT:
			return {
				...state,
				post: { ...state.post, comments: action.payload },
				loading: false
			};

		case POST_REMOVE_COMMENT:
			return {
				...state,
				post: {
					...state.post,
					comments: state.post.comments.filter (
						comment => comment._id !== action.payload
					)
				},
				loading: false
			};

		default: return state;
	}

}