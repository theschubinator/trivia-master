const initialState = {
	// username: '',
	// email: '',
	// password: '',
	// password_confirmation: '',
};

export const userFormDataReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'UPDATE_FORM':
			return action.payload
		case 'SET_FORM':
			return action.payload
		case 'RESET_FORM':
			return initialState
		default:
			return state
	}
}