import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadQuestion, setGame } from '../actions/game';
import '../styles/gamesTable.css';

export const GameResults = ({game, user, history, index, loadQuestion, setGame}) => {
	
	const handleClick = () => {
		loadQuestion(`/users/${user.id}/games/${game.id}`)
		.then(game => { setGame(game)
			const redirect = () => { return history.push(`${user.id}/games/${game.id}`) }
			//componentDidMount() will not work on ShowGame page, therefore we are
			//delaying the redirect in order to allow time for the game to be mounted
			// to the state.
			setTimeout(redirect, 3)
		})
		
	}
	
	return (
		<div>
			<div className="col-sm-4">
				<p className="gameCategory">{game.category}</p>
			</div>
			<div className="col-sm-4">
				<p className="gameResults">{game.correct/10 * 100 || 0}%</p>
			</div>
			<div className="col-sm-4">
				<Button className="viewGameBtn" bsStyle="danger" bsSize="xsmall" onClick={handleClick}>View Game</Button>
			</div>
		</div>
	)
}

// const sameCategories = (categories) => {
// 	return categories.every(name => name === categories[0])
// }

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		oldGame: state.oldGame
	}
}

export default connect(mapStateToProps, { loadQuestion, setGame })(GameResults);
