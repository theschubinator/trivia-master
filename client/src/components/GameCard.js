import React from 'react';
import { connect } from 'react-redux';
import { updateGameResults } from '../actions/game';
import { shuffle } from '../helpers/questions';

const GameCard = (props) => {	
	const { question } = props;
	
	const handleClick = (e) => {
		const selection = e.target.innerText
		const result = (question.answer === selection) ? true : false
		props.updateGameResults(result)
	}
	//slice(2,6) grabs only the necessary keys of the question...
	const shuffledKeys = shuffle(Object.keys(question).slice(2,6))
	return (
		<div>
			<h2>{question.question}</h2>
			<p onClick={handleClick}>{question[shuffledKeys[0]]}</p>
			<p onClick={handleClick}>{question[shuffledKeys[1]]}</p>
			<p onClick={handleClick}>{question[shuffledKeys[2]]}</p>
			<p onClick={handleClick}>{question[shuffledKeys[3]]}</p>
		</div>
	)
}

export default connect(null, {updateGameResults})(GameCard);