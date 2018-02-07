import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserStatistics from '../components/UserStatistics';

const UserProfile = ({user, userGames, questions, categories}) => {
	if(!user.loggedIn) return <Redirect to="/" />

	return (
		<div>
			<h1>{user.username}</h1>
			<UserStatistics userGames={userGames} questions={questions} categories={categories} />
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