export const currentUserGamesReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_USER_GAMES':
			return action.payload
		case 'SAVE_GAME':
			const new_payload = {id: state.length+1, ...action.payload}
			return state.concat(new_payload)
		default:
			return state
	}
}