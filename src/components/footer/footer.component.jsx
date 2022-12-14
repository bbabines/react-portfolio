import React from "react";

const Footer = (props) => {
	return (
		<footer className={props.darkMode ? "footer" : "footer-light"}>
			<div className="footer-title">Contact:</div>
			<div className="footer-email">
				Say hello at{" "}
				<a href="mailto::bbabines@gmail.com">
					<span>bbabines@gmail.com.</span>
				</a>
			</div>

			<a
				className="git-hub-link"
				href="http://github.com/bbabines"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="github" src="./assets/github.svg" alt="Github icon" />
			</a>

			<a
				className="linkedin-link"
				href="https://www.linkedin.com/in/bradbabines/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					className="linkedin-icon"
					src="./assets/linkedin-icon.svg"
					alt="LinkedIn Icon"
				/>
			</a>
		</footer>
	);
};

export default Footer;
