import React from "react";

const SectionFour = (props) => {
	return (
		<div id="section-four">
			<div className={props.darkMode ? "projects-page" : "projects-page-light"}>
				<div className="projects-title">Projects</div>
				<div className="project-display">
					<div className="brads-clothing">
						E-Commerce Clothing
						<a
							href="https://brads-clothing.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="brads-clothing-thumb"
								src="./assets/brads-clothing-thumb.png"
								alt="A e-commerce clothing store"
							/>
						</a>
					</div>

					<div className="project-five">
						Advanced Notepad
						<a
							href="https://complex-react-notepad.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="react-notepad-thumb"
								src="./assets/react-notepad-thumb.png"
								alt="Thumbnail of an advanced notepad"
							/>
						</a>
					</div>

					<div className="project-three">
						Speed Typing Game
						<a
							href="https://react-typing-game-with-vite.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="react-typing-game-thumb"
								src="./assets/react-typing-game-img.png"
								alt="Typing Game Thumbnail"
							/>
						</a>
					</div>

					<div className="three-js-galaxy">
						Immersive & Interactive Galaxy
						<a
							href="https://galaxy-three.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="brads-clothing-thumb"
								src="./assets/galaxy-thumb.png"
								alt="A galaxy created in three.js"
							/>
						</a>
					</div>

					<div className="project-one">
						A Calculator
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
						A Dashboard
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

					{/* <div className="project-five">
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
					</div> */}

					{/* 
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
					</div> */}

					{/* <div className="project-four">
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
					</div> */}
				</div>
			</div>

			<div />
		</div>
	);
};

export default SectionFour;
