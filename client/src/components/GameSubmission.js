import React from 'react';
import { connect } from 'react-redux';
import { resetBoard } from '../actions/game';
import PlayGame from '../containers/PlayGame';

const GameSubmission = (props) => {
	
	 //submit game here
	const handleClick = (e) => {
		if(e.target.name === 'yes') { 
			props.resetBoard(props.game)
			props.history.push('/newgame');
		}
		else { 
			props.resetBoard(props.game)
			props.history.push(`/users/${props.user.id}`)
		}
	}

	return (
		<div>
			<button name="yes" onClick={handleClick}>Play Again</button>
			<button name= "no" onClick={handleClick}>Don't Play Again</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		game: state.game,
		user: state.currentUser
	}
}

export default connect(mapStateToProps, {resetBoard})(GameSubmission);