const defaultState = {
	id: '',
	username: '',
	email: '',
	admin: '',
	loggedIn: false,
	userGames: []
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
			return Object.assign({}, state, {userGames: state.userGames.concat(action.payload)})
		default:
			return state
	}
}