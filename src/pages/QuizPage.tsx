import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Quizes from "../components/HOC/Quizs";
import ProfileHeader from "../components/ProfileHeader";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { FiRotateCw } from "react-icons/fi";
export interface ChemQuizInterface {
	quizData: any;
	rank: number;
}
const QuizPage = ({ quizData, rank }: ChemQuizInterface) => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [points, setPoints] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const optionClickHandler = (e: any, isCorrect: any) => {
		if (isCorrect) {
			e.target.classList.add("correct");
			setPoints(points + 10);
		} else {
			e.target.classList.add("wrong");
			setPoints(points - 5);
		}
		setTimeout(() => {
			if (questionNumber === quizData.length - 1) {
				setShowScore(true);
			}
			if (questionNumber < quizData.length - 1) {
				setQuestionNumber(questionNumber + 1);
			}
		}, 1000);
	};
	const history = useHistory();
	const playAgain = () => {
		history.push(`/`);
	};
	return (
		<Quizes>
			<div className="quiz-page">
				{showScore ? (
					<motion.div
						initial={{ fontSize: "10rem", height: "400px", width: "120%" }}
						animate={{ fontSize: "1.5rem", height: "300px", width: "100%" }}
						className="quiz-page-scorecard"
					>
						<h1>Your Score is {points}</h1>
						<Button classname="button-continue" onclick={playAgain}>
							Play again
							<FiRotateCw />
						</Button>
					</motion.div>
				) : (
					<>
						<ProfileHeader Points={points} Rank={rank} />
						<ProgressBar percentage={questionNumber + 1} />
						<h1>
							{questionNumber + 1}/{quizData.length}
						</h1>
							<h1 className="quiz-page-question">
								
							{quizData[questionNumber].question}
						</h1>
						{quizData[questionNumber].options.map((ele: any) => (
							<Button
								classname={"button-options"}
								onclick={(e) => optionClickHandler(e, ele.isRight)}
								key={ele.ans.toString()}
							>
								{ele.ans}
							</Button>
						))}
					</>
				)}
			</div>
		</Quizes>
	);
};

export default QuizPage;
