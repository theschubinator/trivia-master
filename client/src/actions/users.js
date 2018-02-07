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

const loadGames = (games) => {
	// //merge question and result into one object...
	// const gamesData = games.map(game => {
	// 	let gameData = []
	// 	for(let i=0; i < 10; i++) {
	// 		const question = questions.find(question => question.id === game.questions[i].id)
	// 		 gameData.push({...question, ...game.results[i]})
	// 	}
	// 	return {id:game.id, category:game.category, ...gameData}
	// });

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