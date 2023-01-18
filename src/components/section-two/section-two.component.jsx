const SectionTwo = (props) => {
	return (
		<div
			id="section-two"
			className={props.darkMode ? "about-page" : "light-about-page"}
		>
			<div className="left-box">
				<h3 className="about-title">About</h3>
				<div>
					Hello! My name is <span className="section-two-name">Brad</span> and I
					enjoy building websites, applications, and immersive experiences.
					<p className="about-story-one">
						While I’ve always loved computers, my passion for coding is
						relatively new. I stumbled upon this new venture when a friend and I
						were trying to bring a concept to life. We were at the point where
						our ideas needed to be tested but there was no funding for the
						project. So I decided to learn to code. To my surprise, I loved it!
					</p>
					<p className="about-story">
						I began using The Odin Project, Free Code Camp, and Codecademy as
						resources for this new chapter in my life. I decided to leave my
						formal education and career in healthcare behind. Fast-forward to
						today and I am working at a software company getting a foundation of
						technical knowledge under my belt.
					</p>
					<p className="about-summary">
						I continue to refine my coding skills while building my passion
						project. I've recently discovered that 3D content, animations, and
						micro-interactions are a source of joy.
					</p>
					<p className="technologies">
						Here are a few technologies I’ve been working with recently:
					</p>
					<br />
					<img
						className="HTML5-icon"
						src="../assets/HTML5.png"
						alt="HTML5 Icon"
					/>
					<img class="CSS-icon" src="../assets/CSS.png" alt="CSS icon" />
					<img class="JS-icon" src="../assets/JS.png" alt="JavaScript Icon" />
					<img
						className="react-icon"
						src="../assets/react.png"
						alt="React Icon"
					/>
					<img
						class="three-js-icon"
						src="../assets/three-js.png"
						alt="three.js Icon"
					/>
					<br />
					<span className="section-two-skills">
						<br />I am currently refining my skills in Three.js and React Three
						Fiber (R3F)
					</span>
					<br />
					<span className="section-two-personal">
						<br />
						Outside of coding I have strong interests in Brazilian Jiu Jitsu
						(BJJ), online-gaming, and spending time with my daughter.
					</span>
				</div>
			</div>
			<div className="right-box">
				<img
					className="about-pic"
					src="../assets/Brad.jpeg"
					alt="Profile Pic"
				/>
			</div>
		</div>
	);
};

export default SectionTwo;
