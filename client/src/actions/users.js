export const loadUser = (userData) => {
	
	const user = {
		id: userData.id,
		username: userData.username,
		email: userData.email,
		admin: userData.email
	}
	return {
		type: 'LOAD_USER',
		payload: userData.error || user
	}
} 