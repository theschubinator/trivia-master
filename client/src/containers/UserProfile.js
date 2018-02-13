import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserGames from '../components/UserGames';
import UserStats from '../components/UserStats';
import LeaderBoard from '../components/LeaderBoard';

const UserProfile = ({user, history}) => {
	if(!user.loggedIn) return <Redirect to="/" />

	return (
		<div>	
			<h1>{user.username}</h1>
			<div>
				<UserGames history={history} />
			</div>
			<div>
				<UserStats />
			</div>
			<div>
				<LeaderBoard />
			</div>
		</div>
		
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		userGames: state.userGames,
		questions: state.questions,
		categories: state.categories
	}
}

export default connect(mapStateToProps)(UserProfile)