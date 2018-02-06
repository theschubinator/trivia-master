import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GameOptions from './GameOptions';
import { questionsByCategory, randomQuestion } from '../helpers/questions';
import GameCard from '../components/GameCard';
import GameSubmission from '../components/GameSubmission';
import { GameBoard } from '../components/GameBoard';
import { resetBoard } from '../actions/game';

class PlayGame extends Component {

	render () {
		const { user, game, questions, history } = this.props
		if(!user.loggedIn) return <Redirect to="/" />

		const playGame = () => {
			if (game.results.length === 10) {
				return <GameSubmission history={history} />
			}
			const gameQuestions = questionsByCategory(questions, game.category);
			const question = randomQuestion(gameQuestions);
			return <GameCard question={question} />
		}

		return (
			<div className="row">
				<div className="col-md-10">
					{ playGame() }
				</div>
				<div className="col-md-2">
					<GameBoard game={game}/>
				</div>
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

export default connect(mapStateToProps, { resetBoard })(PlayGame);