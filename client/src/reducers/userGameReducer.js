export const userGameReducer = (state=[], action) => {
	switch(action.type) {
		case 'LOAD_GAME_QUESTIONS':
			return action.payload
		default:
			return state
	}
}