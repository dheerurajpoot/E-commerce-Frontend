import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
	const loggedUser = useSelector((state) => state.auth.user);

	return (
		<>
			<div className='profile-container'>
				<div className='container'>
					<h2>profile</h2>
					<p>{loggedUser.name}</p>
					<Link to={"/my-orders"}>My Orders</Link>
				</div>
			</div>
		</>
	);
};

export default Profile;
