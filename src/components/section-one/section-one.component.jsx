const SectionOne = (props) => {
	return (
		<main className={props.darkMode ? "main" : "main--light"}>
			<div className={props.darkMode ? "section-one" : "section-one--light"}>
				<div className="section-one-small-intro">Hi, my name is</div>

				<div className="section-one-big-intro">Brad Babines</div>
				<div className="section-one-second-line">
					I'm a front-end software engineer.
				</div>

				<p className="section-one-paragraph">
					I build digital experiences and tools to help harness collective
					intelligence. Currently, I’m focused on learning to make these
					applications more immersive and fun.
				</p>
				<div className="resume">
					<a
						href="./assets/Brad's Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="resume-text">Check out my resume</span>
					</a>
				</div>
			</div>
		</main>
	);
};

export default SectionOne;
