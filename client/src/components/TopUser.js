import React from 'react';

const TopUser = ({user, category, index}) => {
 	const cssClass = index % 2 === 0 ? 'top-user user1' : 'top-user user2'

	return (
		<div className={`row ${cssClass}`}>
			<div className="col-md-6">
				<p>{index+1}.{user.username} </p>
			</div>
			<div className="col-md-2">
				<p>{user[category]}%</p>
			</div>
		</div>
	)
}

export default TopUser;