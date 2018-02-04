import React from 'react';
import { setGameCategory } from '../actions/game';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetBoard } from '../actions/game';

const GameOptions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />

	const handleClick = (e) => {
		const category = e.target.name
		props.setGameCategory(category)
		//fixes an issue if a user navagates from the GameSubmission without
		// selecting to play again or not. Board is then reset here.
		if(props.game.results.length > 0) props.resetBoard(props.game)
		props.history.push("/newgame/start")
	}

	return (
		<div>
			<button name="All" onClick={handleClick}>All</button>
			<button name="Sports" onClick={handleClick}>Sports</button>
			<button name="History" onClick={handleClick}>History</button>
			<button name="Entertainment" onClick={handleClick}>Entertainment</button>
			<button name= "Science" onClick={handleClick}>Science</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		game: state.game
	}
}

export default connect(mapStateToProps, {setGameCategory, resetBoard})(GameOptions);