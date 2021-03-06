//** ACTION Creators
export const loadUser = (user) => {
	return {
		type: 'LOAD_USER',
		payload: user
	}
}

const getUsers = (users) => {
	return {
		type: 'LOAD_USERS',
		payload: users
	}
}

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
} 

const loadGames = (games) => {

	return {
		type: 'LOAD_USER_GAMES',
		payload: games
	}
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

export const loadUserGames = (id, questions) => {
	return dispatch => {
		 fetch(`/api/users/${id}/games`)
		 .catch(error => (console.log(error)))
		.then(response => response.json())
		.then(games => dispatch(loadGames(games)))
	}
}

export const loadUsers = () => {
	return dispatch => {
		return fetch('/api/users')
		.catch(error => console.log(error))
		.then(response => response.json())
		.then(users => dispatch(getUsers(users)))
	}
}

export const signUpUser = (formData) => {
	return dispatch => {
		return fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ user: formData })
		})
			.catch(error => console.log(error))
			.then(response => response.json())
	}
}