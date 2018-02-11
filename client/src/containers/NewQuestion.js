import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitQuestion, updateQuestions } from '../actions/questions';

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
			incorrect1: '',
			incorrect2: '',
			incorrect3: '',
			category_name: '',
			user_id: this.props.user.id,
			errors: []
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.submitQuestion(this.state)
		.then(question => {
			if(question.errors) {
				this.setState({ errors: question.errors })
			} else {
				this.props.updateQuestions(question)
				this.props.history.push('/questions')
			}
		})
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		const showErrors = () => { return this.state.errors.map((error, i) => <p id={`error_${i+1}`}>{error}</p>) };

		if(!this.props.user.loggedIn) return <Redirect to="/" />
		return (
			<div id="questionForm">
				<form onSubmit={this.handleSubmit}>
					<div id="createQuestion">
						<label>Question</label><br/>
						<input type="text" className="inputField" name="question" value={this.state.question} onChange={this.handleChange} />
					</div>
					<div id="createByCategory">
						<label>Choose a Category</label><br />
							<select name="category_name" value={this.state.category_name} onChange={this.handleChange}>
							  <option value="" selected disabled hidden>Categories...</option>
								<option value="Sports">Sports</option>
								<option value="History">History</option>
								<option value="Science">Science</option>
								<option value="Entertainment">Entertainment</option>
							</select>
					</div>
					<div id="createAnswer">
						<label>Answer</label><br/>
						<input type="text" className="inputField" name="answer" value={this.state.answer} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #1</label><br/>
						<input type="text" className="inputField" name="incorrect1" value={this.state.incorrect1} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #2</label><br/>
						<input type="text" className="inputField" name="incorrect2" value={this.state.incorrect2} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #3</label><br/>
						<input type="text" className="inputField" name="incorrect3" value={this.state.incorrect3} onChange={this.handleChange} />
					</div>

					<Button bsStyle="success" bsSize="large" type="submit" block>Create Question</Button>
					<div className="errors">
						{showErrors()}
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		formData: state.formData
	}
}

export default connect(mapStateToProps, { submitQuestion, updateQuestions })(NewQuestion);