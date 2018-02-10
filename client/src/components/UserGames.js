import React from 'react';
import { connect } from 'react-redux';
import GameResults from './GameResults';

const UserGames = ({userGames, user, history}) => {
	const gamesPlayed = user.games.length

	const displayGame = () => {
		if(gamesPlayed === 0)
			return <h4><i>You haven't played any games yet.</i></h4>
	  else 
	 		return <div id="oldGames">{viewGame}</div>
	}

	const viewGame = user.games.map((game, i) => {
		const cssClass = i % 2 === 0 ? 'game1' : 'game2'
		return <h5 key={i} className={`row gameHistory ${cssClass}`}><GameResults game={game} index={i} history={history} /></h5>
	})

	return (
		<div id="oldGamesBoard">
			<h1>Games Played: { gamesPlayed }</h1>
			<div className="row">
        <div id="categoryHeader" className="col-md-6">
        	<p><b>Category</b></p>
        </div>
        <div id="resultsHeader" className="col-md-6">
        	<p><b>Results</b></p>
        </div>
      </div>
			<div>
				{displayGame()}
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}
export default connect(mapStateToProps)(UserGames);