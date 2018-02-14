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
		<tr>
			<th>{game.category}</th>
			<th>{game.correct/10 * 100 || 0}%</th>
			<th><Button bsStyle="danger" bsSize="xsmall" onClick={handleClick}>View Game</Button></th>
		</tr>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		oldGame: state.oldGame
	}
}

export default connect(mapStateToProps, { loadQuestion, setGame })(GameResults);
