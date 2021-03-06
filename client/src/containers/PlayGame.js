import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { questionsByCategory, randomQuestion } from '../helpers/questions';
import GameCard from '../components/GameCard';
import GameSubmission from '../components/GameSubmission';
import { GameBoard } from '../components/GameBoard';

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
				<div className="col-md-8 col-sm-12">
					{ playGame() }
				</div>
				<div className="col-md-4 col-sm-12">
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

export default connect(mapStateToProps)(PlayGame);