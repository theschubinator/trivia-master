import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import QuestionCard from '../components/QuestionCard';

const showQuestions = (props) => {
	if(!props.user.loggedIn) return <Redirect to="/" />
	
	const showQuestion = props.questions.map(question => {
		return (
				<div className="col-md-6">
					<QuestionCard question={question} />
				</div>
		)
		
	})

	return (
		<div ClassName="row">
			<p id="questionNote"><b>Note: </b><i>Green signifies the correct answer.</i></p>
			{showQuestion}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps)(showQuestions);