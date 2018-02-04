const defaultState = {
	id: '',
	username: '',
	email: '',
	admin: ''
}

export const currentUserReducer = (state=defaultState, action) => {
	switch(action.type) {
		case 'LOAD_USER':
			return action.payload
		default:
			return state
	}
}