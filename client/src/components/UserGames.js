import React from 'react';
import { connect } from 'react-redux';
import GameResults from './GameResults';
import UserStats from './UserGames';
import { Table, Button, Pagination } from 'react-bootstrap';
import { loadQuestion, setGame } from '../actions/game';

const UserGames = ({userGames, user, history, loadQuestion, setGame}) => {

	const handleClick = (e) => {
		const game_id = e.target.name
		loadQuestion(`/users/${user.id}/games/${game_id}`)
		.then(game => { setGame(game)
			const redirect = () => { return history.push(`${user.id}/games/${game_id}`) }
			//componentDidMount() will not work on ShowGame page, therefore we are
			//delaying the redirect in order to allow time for the game to be mounted
			// to the state.
			setTimeout(redirect, 3)
		})
		
	}

	const viewGame = user.games.map((game, i) => {
		return ( 
			<tr key={i} id="old-game">
				<th>{game.category}</th>
				<th>{game.correct/10 * 100 || 0}%</th>
				<th><Button bsStyle="danger" bsSize="xsmall" name={game.id} onClick={handleClick}>View Game</Button></th>
			</tr> 
		)
	})

	const displayGame = () => {
		if(user.games.length === 0)
			return <tr><th>You haven't palyed any games yet.</th></tr>
	  else 
	 		return <tbody id="old-games">{ viewGame }</tbody>
	}

	return (
		<div>

			<div className="row" id="Statsheader">
				<div className="col-md-12">
					<h1>Statistics</h1>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12 col-sm-12">
					<Table id="user-stats-table">
						<thead>
						 <tr>
						 	<th>Total</th>
						 	<th>Sports</th>
						 	<th>History</th>
						 	<th>Entertainment</th>
						 	<th>Science</th>
						 </tr>
						</thead>
						<tbody>
							<th>{Math.round(user.total_correct/(user.games_played * 10) * 100) || 0}%</th>
							<th>{Math.round((user.sports_correct/user.sports_played) * 100) || 0}%</th>
							<th>{Math.round((user.history_correct/user.history_played) * 100) || 0}%</th>
							<th>{Math.round((user.entertainment_correct/user.entertainment_played) * 100) || 0}%</th>
							<th>{Math.round((user.science_correct/user.science_played) * 100) || 0}%</th>
						</tbody>
					</Table>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-4">
					<h1>Played:</h1>
				</div>
				<div className="col-sm-2">
					<h1>{ user.games.length }</h1>
				</div>
			</div>
			<div id='test'>
				<Table id="user-games-table">
					<thead>
						<tr>
							<th>Category</th>
							<th>Results</th>
							<th></th>
						</tr>
					</thead>
					{displayGame()}
				</Table>
			</div>
		</div>

			

	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser
	}
}

export default connect(mapStateToProps, { loadQuestion, setGame })(UserGames);