const defaultState = {
	id: '',
	username: '',
	email: '',
	admin: '',
	loggedIn: false
};

export const currentUserReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'LOAD_USER':
			return Object.assign({}, state, { loggedIn: true}, action.payload)
		case 'SHOW_ERRORS':
			return action.payload
		case 'SIGN_OUT':
			return defaultState
		default:
			return state
	}
}