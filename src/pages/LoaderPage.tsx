import React, { useEffect, useRef } from "react";
import Logo from "../assets/quiz-app logo.png";
import { motion } from "framer-motion";
const LoaderPage = () => {
	const divRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			// @ts-ignore
			divRef.current.classList.add("fade-out");
		}, 2000);
		setTimeout(() => {
			// @ts-ignore
			divRef.current.style.display = "none";
		}, 3000);
	}, []);
	return (
		<div className="buffer" ref={divRef}>
			<img src={Logo} alt="" />
			<motion.h1 initial={{ fontSize: "10rem" }} animate={{ fontSize: "4rem" }}>
				QuizBee
			</motion.h1>
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoaderPage;
