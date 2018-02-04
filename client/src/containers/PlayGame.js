import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameOptions from './GameOptions';
import { questionsByCategory, randomQuestion } from '../helpers/questions';
import GameCard from '../components/GameCard';

class PlayGame extends Component {

	render () {
		const { user, game, questions } = this.props
		if(!user.loggedIn) return <Redirect to="/" />
		
		const playGame = () => {
			const gameQuestions = questionsByCategory(questions, game.category);
			const question = randomQuestion(gameQuestions);
			return <GameCard question={question} />
		}

		return (
			<div>
				<h1>Playing Game</h1>
				{ playGame() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		game: state.game,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(PlayGame);