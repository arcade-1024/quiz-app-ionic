import React from "react";
import { useHistory } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import Quizs from '../components/HOC/Quizs';
import mapImg from '../assets/map.png';
import atomImg from '../assets/atom.png';
import compassImg from '../assets/compass.png';
import nassImg from '../assets/NASA.png';
export interface HomePageInterface{
	rank: Number;
	points: Number;
}
const Home = ({points,rank }:HomePageInterface) => {


	const history = useHistory();

	const chooseQuizHandler = (pathName: string) => {
		history.push(`/${pathName}`);
	};

	return (
		<Quizs>
			<div className="home">
				<ProfileHeader Points={points} Rank={rank} />
				<div className="home-title-text">
					<h1>Let's Play</h1>
					<p>Choose One and Strat playing</p>
				</div>
				<div className="home-main">
					<div className="home-main-row">
						<div
							className="home-main-quiz-select select-1"
							onClick={() => chooseQuizHandler("space")}
						>
							<img className="home-main-quiz-select-img" src={nassImg} alt="" />
							<h1>Space</h1>
						</div>
						<div
							className="home-main-quiz-select select-2"
							onClick={() => chooseQuizHandler("city")}
						>
							<img src={mapImg} className="home-main-quiz-select-img" alt="" />
							<h1>City</h1>
						</div>
					</div>
					<div className="home-main-row">
						<div
							className="home-main-quiz-select select-1"
							onClick={() => chooseQuizHandler("history")}
						>
							<img
								className="home-main-quiz-select-img"
								src={compassImg}
								alt=""
							/>
							<h1>History</h1>
						</div>
						<div
							className="home-main-quiz-select select-2"
							onClick={() => chooseQuizHandler("chemistry")}
						>
							<img className="home-main-quiz-select-img" src={atomImg} alt="" />
							<h1>Chemistry</h1>
						</div>
					</div>
				</div>
			</div>
		</Quizs>
	);
};

export default Home;
