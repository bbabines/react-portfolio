const SectionOne = () => {
	return (
		<main>
			<div className="section-one">
				<div className="section-one-small-intro">Hi, my name is</div>

				<div className="section-one-big-intro">
					Brad Babines
					<div className="section-one-second-line">
						I'm a front-end software engineer.
					</div>
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
