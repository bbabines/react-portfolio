import React from "react";

const SectionFour = () => {
	return (
		<div>
			<div className="projects-page">
				<div className="projects-title">Projects</div>
				<div className="project-display">
					<div className="project-one">
						Calculator
						<a
							href="https://bbabines.github.io/calculator/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="calc-thumb"
								src="./assets/calc-thumb.png"
								alt="Calculator thumbnail"
							/>
						</a>
					</div>

					<div className="project-two">
						Dashboard
						<a
							href="https://bbabines.github.io/dashboard/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="dashboard-thumb"
								src="./assets/dashboard-thumb.png"
								alt="Thumbnail of a dashboard project"
							/>
						</a>
					</div>

					<div className="project-three">
						Etch-a-Sketch
						<a
							href="https://bbabines.github.io/etch-a-sketch/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="etch-thumb"
								src="./assets/etch-thumb.png"
								alt="Etch-a-Sketch thumbnail"
							/>
						</a>
					</div>

					<div className="project-four">
						Paper-Rock-Scissors
						<a
							href="https://bbabines.github.io/paper-rock-scissors/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="prs-thumb"
								src="./assets/prs-thumb.png"
								alt="Paper, Rock, Scissors thumbnail"
							/>
						</a>
					</div>

					<div className="project-five">
						Sign-Up Form
						<a
							href="https://bbabines.github.io/sign-up-form/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="signup-thumb"
								src="./assets/signup-thumb.png"
								alt="Thumbnail of a sign-up form"
							/>
						</a>
					</div>

					<div className="project-six">
						Landing Page
						<a
							href="https://bbabines.github.io/odin-landing-page/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="landing-thumb"
								src="./assets/landing-thumb.png"
								alt="Landing page thumbnail"
							/>
						</a>
					</div>
				</div>
			</div>

			<div />
		</div>
	);
};

export default SectionFour;