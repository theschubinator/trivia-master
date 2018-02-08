import React from 'react';
import { connect } from 'react-redux';

const UserStats = ({user}) => {
	return (
		<div>
			<h1>Statistics</h1>
			<p>All: {Math.round(user.total_correct/(user.games_played * 10) * 100) || 0}% Correct</p>
			<p>Sports: {Math.round((user.sports_correct/user.sports_played) * 100) || 0}% Correct</p>
			<p>History: {Math.round((user.history_correct/user.history_played) * 100) || 0}% Correct</p>
			<p>Entertainment: {Math.round((user.entertainment_correct/user.entertainment_played) * 100) || 0}% Correct</p>
			<p>Science: {Math.round((user.science_correct/user.science_played) * 100) || 0}% Correct</p>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(UserStats);