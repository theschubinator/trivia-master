import React from 'react';

const TopUser = ({user, category}) => {

	return (
		<div>
			<h4>{user.username}</h4>
			<p>{user[category]}%</p>
		</div>
	)
}

export default TopUser;