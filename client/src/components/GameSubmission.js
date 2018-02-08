import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetBoard, submitGame, saveGame } from '../actions/game';
import { Button } from 'react-bootstrap';

class GameSubmission extends Component {
	componentWillMount() {
		this.props.submitGame(this.props.game, this.props.user)
	}

	componentWillUnmount() {
		this.props.resetBoard()
	}

	handleClick = (e) => {
		if(e.target.name === 'yes') { 
			this.props.history.push('/newgame');
		}
		else { 
			this.props.history.push(`/users/${this.props.user.id}`)
		}
	}

	render () {
		return (
			<div className="replayGame">
				<Button name="yes" onClick={this.handleClick}>Play Again</Button>
				<Button name= "no" onClick={this.handleClick}>Don't Play Again</Button>
			</div>
		)
	}
}
	
const mapStateToProps = (state) => {
	return {
		game: state.game,
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps, {resetBoard, submitGame, saveGame})(GameSubmission);