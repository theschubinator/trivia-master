import React from 'react';
import { connect } from 'react-redux';
import GameResults from './GameResults';

const UserGames = ({userGames, user, history}) => {
	const gamesPlayed = user.games.length

	const displayGame = () => {
		if(gamesPlayed === 0) {
			return (
				<div className="row">
					<div className="col-sm-12">
						<h4><i>You haven't played any games yet.</i></h4>
					</div>
				</div>
			)
	  }
	  else {
	 		return (
	 			<div id='old-games'>
	 				{viewGame}
	 			</div>
	 		)
	  }
	}

	const viewGame = user.games.map((game, i) => {
		const cssClass = i % 2 === 0 ? 'game1' : 'game2'
		return <p key={i} className={`old-game ${cssClass}`}><GameResults game={game} index={i} history={history} /></p>
	})

	return (
		<div>
			<div className="row">
				<div className="col-sm-12">
					<h1>Games</h1>
				</div>
				<div className="row" id="game-total">
					<div className="col-sm-4">
						<p>Played: </p>
					</div>
					<div className="col-sm-2">
					 <p>{ gamesPlayed }</p>
					</div>
				</div>
			</div>
				
			<div className="row">
				<div className="col-sm-5">
					<p><b>Category</b></p>
				</div>
				<div className="col-sm-4">
					<p><b>Results</b></p>
				</div>
			</div>
			{displayGame()}
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}
export default connect(mapStateToProps)(UserGames);