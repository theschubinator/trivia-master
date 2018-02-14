import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserGames from '../components/UserGames';
import UserStats from '../components/UserStats';
import LeaderBoard from '../components/LeaderBoard';
/*





				*/
const UserProfile = ({user, history}) => {
	if(!user.loggedIn) return <Redirect to="/" />

	return (
		<div className="container" id="user-profile">

			<div className="row" id="username">
				<div className="col-sm-10">
					<h1>{user.username}</h1>
				</div>
			</div>

			<div className="row">
				<div className="col-md-5 col-sm-12 box" id="user-games">
					<UserGames history={history} />
				</div>

				<div className="col-md-5 col-sm-12 box" id='leaderboard'>
					<LeaderBoard />
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