import React from 'react';
import { connect } from 'react-redux';
import '../styles/userStatisticsBoard.css';

const UserStats = ({user}) => {
	return (
		<div id="UserStatistics">

			<div className="row" id="Statsheader">
				<div className="col-md-12">
					<h1>Statistics</h1>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12" id="totalResults">
					<label>Total</label>
					<p>{Math.round(user.total_correct/(user.games_played * 10) * 100) || 0}% Correct</p>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 categoryResults">
					<label>Sports</label> 
					<p>{Math.round((user.sports_correct/user.sports_played) * 100) || 0}% Correct</p>
				</div>
				<div className="col-md-6 categoryResults">
					<label>History</label> 
					<p>{Math.round((user.history_correct/user.history_played) * 100) || 0}% Correct</p>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 categoryResults">
					<label>Entertainment</label>
					<p>{Math.round((user.entertainment_correct/user.entertainment_played) * 100) || 0}% Correct</p>
				</div>
				<div className="col-md-6 categoryResults">
					<label>Science</label>
					<p>{Math.round((user.science_correct/user.science_played) * 100) || 0}% Correct</p>
				</div>
			</div>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps)(UserStats);