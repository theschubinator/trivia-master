export const currentUserGamesReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_USER_GAMES':
			return action.payload
		default:
			return state
	}
}