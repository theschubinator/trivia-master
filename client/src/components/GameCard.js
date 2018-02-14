import React from 'react';
import { connect } from 'react-redux';
import { updateGameResults } from '../actions/game';
import { shuffle } from '../helpers/questions';
import '../styles/questions.css';
import '../styles/gameQuestions.css';

const GameCard = ({question, updateGameResults}) => {	
	
	const handleClick = (e) => {
		const selection = e.target.innerText
		const result = (question.answer === selection) ? true : false
		updateGameResults(question, result)
	}
	//slice(2,6) grabs only the necessary keys of the question...
	const shuffledKeys = shuffle(Object.keys(question).slice(2,6))

	return (
		<div id="gameCard">
			<div className="row question-info">
				<div className="col-sm-6">
					<h4 id="question-creator">Created by: {question.user.username}</h4>	
					<h4 id='question-category'>Category: {question.category.name}</h4>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-12">
					<h2>{question.question}</h2>
				</div>
			</div>
			<div id="question-choices">
				<div className="row">
					<div className="col-sm-6" onClick={handleClick}>
						<p className="questionChoice">{question[shuffledKeys[0]]}</p>
					</div>
					<div className="col-sm-6" onClick={handleClick}>
						<p className="questionChoice">{question[shuffledKeys[1]]}</p>
					</div>
				</div>
			
				<div className="row">
					<div className="col-sm-6" onClick={handleClick}>
						<p className="questionChoice">{question[shuffledKeys[2]]}</p>
					</div>
					<div className="col-sm-6" onClick={handleClick}>
						<p className="questionChoice">{question[shuffledKeys[3]]}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(null, {updateGameResults})(GameCard);