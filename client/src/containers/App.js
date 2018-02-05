import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Routes } from '../components/Routes';
import { connect } from 'react-redux';

import { loadQuestions } from '../actions/questions';

class App extends Component {
  componentDidMount() {
    this.props.loadQuestions()
  }

  render() {
  	const { user } = this.props;
    return (
    	<Router >
	    	<div>
	      	<NavBar />
	      	<Routes />
	      </div>
	    </Router>
    );
  }
}

export default connect(null, {loadQuestions})(App);

