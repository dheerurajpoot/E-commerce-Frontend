import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
	const loggedUser = useSelector((state) => state.auth.user);

	return (
		<>
			<div className='profile-container'>
				<div className='container'>
					<h2>profile</h2>
					<p>{loggedUser.name}</p>
				</div>
			</div>
		</>
	);
};

export default Profile;
