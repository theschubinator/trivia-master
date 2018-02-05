//** ACTION Creators
export const loadUser = (user) => {
	return {
		type: 'LOAD_USER',
		payload: user
	}
}

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
} 

//** ASYNC Actions
export const login = (data) => {
	const user = {
		username: data.username,
		password: data.password
	};

	return dispatch => {
		return fetch('api/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user: user)
		})
		.then(response => response.json())
	}
}