import React from "react";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : "nav--light"}>
			<button type="button" onClick={props.toggleDarkMode} className="mode">
				Btn
			</button>
			<h3 className={props.darkMode ? "signature" : "signature--light"}>
				<a href="google.com"> Brad Babines</a>
			</h3>

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
