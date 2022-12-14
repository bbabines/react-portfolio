const SectionThree = (props) => {
	return (
		<div
			className={props.darkMode ? "experience-page" : "experience-page-light"}
		>
			<div className="experience-left">
				<div className="experience-title">Experience</div>
				<p className="experience-pt-1">
					My background is in healthcare, specifically in the critical care
					setting. I am used to a fast-paced, high stress environment with a lot
					of attention to detail. I provided nutrition and hydration for the
					sickest patients in the Columbus, Ohio area.
					<br />
					<p className="experience-pt-2">
						During my career I reached the top of my field and helped expand the
						social norms of what Registered Dietitians (RDs) are able to do.
					</p>
					<br />I intend to utilize my{" "}
					<span className="exp-highlight-one">
						ability to work well on a team
					</span>
					, <span className="exp-highlight-two">effectively communicate</span>,
					and <span className="exp-highlight-three">deliver detailed work</span>{" "}
					that I've{" "}
					<span className="exp-highlight-four">
						refined over the last decade
					</span>{" "}
					in the software engineering space.
					<br />
					<br />
					<p className="experience-pt-3">
						Within the last year I have since transitioned into the tech field.
						I am currently getting a solid foundation as a tech lead with a
						software company. I continue to work on my coding skills in my free
						time.
					</p>
				</p>
			</div>
			<div className="experience-right">
				<img src="./assets/healthcare.png" alt="Healthcare image" />
			</div>
		</div>
	);
};

export default SectionThree;
