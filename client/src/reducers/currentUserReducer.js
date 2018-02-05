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
			// loggedIn status either true || false dpeending if errors were returned or not.
			return Object.assign({}, state, { loggedIn: !action.payload.error}, action.payload)
		case 'SIGN_OUT':
			return defaultState
		default:
			return state
	}
}