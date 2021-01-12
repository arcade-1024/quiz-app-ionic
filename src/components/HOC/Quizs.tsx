import React, { ReactNode } from "react";

export interface QuizHoc {
	children: ReactNode;
}
const Quizes = ({ children }: QuizHoc) => {
	return <div className="quizes">{children}</div>;
};

export default Quizes;
