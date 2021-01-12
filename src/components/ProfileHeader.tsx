import React from "react";
import profileImg from '../assets/undraw_male_avatar_323b.svg';
export interface ProfileHeaderComponent {
	Rank: Number;
  Points: Number;
}
const ProfileHeader = ({
	Points,
	Rank,
}: ProfileHeaderComponent) => {
	return (
		<div className="profile-bar">
			<div className="profile-bar-account">
				<div className="profile-bar-account-img">
					<img src={profileImg} alt="" />
				</div>
				<div className="profile-bar-info">
					<p>Rank</p>
					<h3>{Rank}</h3>
				</div>
			</div>
			<div className="profile-bar-points">
				<div className="profile-bar-account-img"></div>
				<div className="profile-bar-info">
					<p>points</p>
					<h3>{Points}</h3>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
