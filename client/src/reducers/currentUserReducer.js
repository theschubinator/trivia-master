const defaultState = {
	id: '',
	username: '',
	email: '',
	admin: '',
	loggedIn: false,
	games: []
};

export const currentUserReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'LOAD_USER':
			return Object.assign({}, state, { loggedIn: true}, action.payload)
		case 'SHOW_ERRORS':
			return action.payload
		case 'SIGN_OUT':
			return defaultState
		case 'SAVE_GAME':
			return Object.assign({}, state, {games: state.games.concat(action.payload)})
		default:
			return state
	}
}