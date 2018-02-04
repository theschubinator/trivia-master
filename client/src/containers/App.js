import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import { Routes } from '../components/Routes';
import '../styles/App.css';

export default class App extends Component {
  render() {
  	const { user } = this.props;
    return (
    	<Router >
	    	<div>
	      	<Header />
	      	<Routes />
	      </div>
	    </Router>
    );
  }
}

