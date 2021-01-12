import React from "react";
export interface ProgressBarComponent {
	percentage: Number;
}
const ProgressBar = ({ percentage }: ProgressBarComponent) => {
	let percent = percentage;
	// @ts-ignore
	percent = percent * 20;
	return (
		<div className="progress-bar">
			<div
				className="progress-bar-filler"
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
