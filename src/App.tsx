import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./styles/css/index.css";

import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import LoaderPage from "./pages/LoaderPage";
import { IonApp, IonContent, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
function App() {
	// eslint-disable-next-line
	const [rank, setRank] = useState(999);
	// eslint-disable-next-line
	const [chemQuiz, setChemQuiz] = useState([
		{
			id: 1,
			question: "what's the lightest element in the periodic table?",
			options: [
				{ ans: "Helium", isRight: false },
				{ ans: "Hydrogen", isRight: true },
				{ ans: "Neutrons", isRight: false },
			],
			correct: "Hydrogen",
		},
		{
			id: 2,
			question: "What is the atomic number of carbon?",
			options: [
				{ ans: "2", isRight: false },
				{ ans: "6", isRight: false },
				{ ans: "14", isRight: true },
			],
			correct: "14",
		},
		{
			id: 3,
			question: "Which of the following has the highest pH value?",
			options: [
				{ ans: "Lime juice", isRight: true },
				{ ans: "Wine", isRight: false },
				{ ans: "Water", isRight: false },
			],
			correct: "Lime juice",
		},
		{
			id: 4,
			question: "Which of the following has the highest pH value?",
			options: [
				{ ans: "Albertium", isRight: false },
				{ ans: "Relativium", isRight: false },
				{ ans: "Einsteinium", isRight: true },
			],
			correct: "Einsteinium",
		},
		{
			id: 5,
			question: "Which of the following is a noble gas?",
			options: [
				{ ans: "Nitrogen", isRight: false },
				{ ans: "Oxygen", isRight: false },
				{ ans: "Argon", isRight: true },
			],
			correct: "Argon",
		},
	]);
	// eslint-disable-next-line
	const [spaceQuiz, setSpaceQuiz] = useState([
		{
			id: 1,
			question: "What type of galaxy is the most common in the universe?",
			options: [
				{ ans: "Elliptical galaxies", isRight: true },
				{ ans: "Spiral galaxies", isRight: false },
				{ ans: "Irregular galaxies", isRight: false },
			],
			correct: "Elliptical galaxies",
		},
		{
			id: 2,
			question: "What is the coldest place in the universe?",
			options: [
				{ ans: "Uranus", isRight: false },
				{ ans: "Boomerang Nebula", isRight: true },
				{ ans: "Kepler-271", isRight: false },
			],
			correct: "Boomerang Nebula",
		},
		{
			id: 3,
			question:
				"The hottest place in the universe is located in which constellation?",
			options: [
				{ ans: "The constellation Leo", isRight: false },
				{ ans: "The constellation Gemini", isRight: false },
				{ ans: "The constellation Virgo", isRight: true },
			],
			correct: "Lime juice",
		},
		{
			id: 4,
			question: "What percent of the universe is dark matter?",
			options: [
				{ ans: "90%", isRight: false },
				{ ans: "5%", isRight: false },
				{ ans: "27%", isRight: true },
			],
			correct: "27%",
		},
		{
			id: 5,
			question: "What is the most common type of star found in the Milky Way?",
			options: [
				{ ans: "White dwarf stars", isRight: false },
				{ ans: "Red dwarf stars", isRight: true },
				{ ans: "Blue Giant stars", isRight: false },
			],
			correct: "Red dwarf stars",
		},
	]);
	// eslint-disable-next-line
	const [cityQuiz, setCityQuiz] = useState([
		{
			id: 1,
			question: "In what city was the first skyscraper built?",
			options: [
				{ ans: "London", isRight: false },
				{ ans: "Chicago", isRight: true },
				{ ans: "Hong kong", isRight: false },
			],
			correct: "Chicago",
		},
		{
			id: 2,
			question: "What city is well known for its Carnival?",
			options: [
				{ ans: "Delhi", isRight: false },
				{ ans: "Colombo", isRight: false },
				{ ans: "Rio de Janeiro", isRight: true },
			],
			correct: "Rio de Janeiro",
		},
		{
			id: 3,
			question: "What Mexican port is famous for its cliff divers?",
			options: [
				{ ans: "Tampico ", isRight: false },
				{ ans: "Acapulco", isRight: true },
				{ ans: "Tijuana", isRight: false },
			],
			correct: "Acapulco",
		},
		{
			id: 4,
			question: "Which Indian city is famed for its clock tower?",
			options: [
				{ ans: "Mumbai", isRight: true },
				{ ans: "Delhi", isRight: false },
				{ ans: "Kolkata", isRight: false },
			],
			correct: "Mumbai",
		},
		{
			id: 5,
			question: "Which European capital city is known as the Eternal City?",
			options: [
				{ ans: "Moscow", isRight: false },
				{ ans: "Wellington", isRight: false },
				{ ans: "Rome", isRight: true },
			],
			correct: "Rome",
		},
	]);
	// eslint-disable-next-line
	const [HisQuiz, setHisQuiz] = useState([
		{
			id: 1,
			question: "How many republics made up the former Soviet Union?",
			options: [
				{ ans: "15", isRight: true },
				{ ans: "20", isRight: false },
				{ ans: "10", isRight: false },
			],
			correct: "15",
		},
		{
			id: 2,
			question: "When was the first Nobel Prize in economics awarded?",
			options: [
				{ ans: "1969", isRight: true },
				{ ans: "1996", isRight: false },
				{ ans: "1970", isRight: false },
			],
			correct: "1969",
		},
		{
			id: 3,
			question:
				"Which Indian president was involved in the struggle for Irish independence?",
			options: [
				{ ans: "S. Radhakrishnan", isRight: false },
				{ ans: "V.V. Giri", isRight: true },
				{ ans: "Neelam Sanjiva Reddy", isRight: false },
			],
			correct: "V.V. Giri",
		},
		{
			id: 4,
			question: "Where were the Aegean Bronze Age civilizations located?",
			options: [
				{ ans: "India", isRight: false },
				{ ans: "Relativium", isRight: false },
				{ ans: "Greece", isRight: true },
			],
			correct: "Greece",
		},
		{
			id: 5,
			question: "Which of these battles did not involve Roman soldiers?",
			options: [
				{ ans: "Arretium", isRight: false },
				{ ans: "Thermopyle", isRight: true },
				{ ans: "Canne", isRight: false },
			],
			correct: "Thermopyle",
		},
	]);
	return (
		<IonApp>
			<IonContent>
				<LoaderPage />
				<IonReactRouter>
					<IonRouterOutlet>
						<Route
							exact
							path="/"
							component={() => <Home rank={rank} points={0} />}
						/>
						<Route
							exact
							path="/space"
							component={() => <QuizPage quizData={spaceQuiz} rank={rank} />}
						/>
						<Route
							exact
							path="/city"
							component={() => <QuizPage quizData={cityQuiz} rank={rank} />}
						/>
						<Route
							exact
							path="/history"
							component={() => <QuizPage quizData={HisQuiz} rank={rank} />}
						/>
						<Route
							exact
							path="/chemistry"
							component={() => <QuizPage quizData={chemQuiz} rank={rank} />}
						/>
					</IonRouterOutlet>
				</IonReactRouter>
			</IonContent>
		</IonApp>
	);
}

export default App;
