import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/signup">Sign Up</Link>
			<Link to="/playgame">Play Game</Link>
		</div>
	)
}