import React from "react";
import DarkModeButton from "../darkmode-button/darkmode-button.component";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : "nav--light"}>
			<h3 className={props.darkMode ? "signature" : "signature--light"}>
				<a href="google.com"> Brad Babines</a>
			</h3>

			<div onClick={props.toggleDarkMode} className="dark-mode-button">
				<DarkModeButton />
			</div>

			{/* <button type="button" onClick={props.toggleDarkMode} className="mode">
				Dark Mode
			</button> */}

			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href="google.com">Home</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href="google.com">About</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href="google.com">Experience</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href="google.com">Projects</a>
			</p>
		</header>
	);
};

export default NavBar;
