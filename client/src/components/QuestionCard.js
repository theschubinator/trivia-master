import React from 'react';
import { deleteQuestion } from '../actions/questions';
import '../styles/questions.css';
import { connect } from 'react-redux';

const QuestionCard = ({ question, deleteQuestion }) => {
	const handleClick = (e) => {
		deleteQuestion(e.target.name)
	}

	return (
		<div className="questionCard" id={`question_${question.id}`}>
			<button name={question.id} className="delete" onClick={handleClick}>X</button>
			<h3>{question.question}</h3>
			<div className="row">
				<div className="col-md-6">
					<h4 className="questionUser">Created by: {question.user.username}</h4>	
				</div>
				<div className="col-md-6">
					<h4>Category: {question.category.name}</h4>
				</div>
			</div>
			<div>
				<p className="correctChoice">{question.answer}</p>
				<p className="incorrectChoice">{question.incorrect1}</p>
				<p className="incorrectChoice">{question.incorrect2}</p>
				<p className="incorrectChoice">{question.incorrect3}</p>	
			</div>
		</div>
	)
}

export default connect(null, { deleteQuestion})(QuestionCard);