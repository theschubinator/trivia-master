import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import userGames from '../components/userGames';

const UserProfile = ({user, history}) => {
	if(!user.loggedIn) return <Redirect to="/" />

	return (
		<div className="row">
			<div className="col-md-10">
				<h1>{user.username}</h1>
			</div>
			<div className="row">
				<div className="col-md-4">
					<userGames history={history} />
				</div>
				<div className="col-md-4">
					<h1>Game Board</h1>
				</div>
				<div className="col-md-4">
					<h1>Leader Board</h1>
				</div>
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