const defaultState = {
	id: '',
	username: '',
	email: '',
	admin: '',
	loggedIn: false,
	games_played: '',
	total_correct: 0,
	entertainment_correct: 0,
	entertainment_played: 0,
	history_correct: 0,
	history_played: 0,
	science_correct: 0,
	science_played: 0,
	sports_correct: 0,
	sports_played: 0,
	games: [],	
};

export const currentUserReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'LOAD_USER':
			return {...state, loggedIn:true, ...action.payload}
		case 'LOAD_USER_GAMES':
			return {...state, games: [...action.payload]}
		case 'SAVE_GAME':
			return {...state, ...action.payload.user, games: state.games.concat(action.payload.game)}
		case 'SIGN_OUT':
			return defaultState
		default:
			return state
	}
}