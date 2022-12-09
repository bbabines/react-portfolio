import React from "react";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : ""}>
			<button type="button" onClick={props.toggleDarkMode} className="mode">
				Btn
			</button>
			<h3 className="signature">
				<a href="google.com"> Brad Babines</a>
			</h3>

			<p className="nav-links">
				<a href="google.com">Home</a>
			</p>
			<p className="nav-links">
				<a href="google.com">About</a>
			</p>
			<p className="nav-links">
				<a href="google.com">Experience</a>
			</p>
			<p className="nav-links">
				<a href="google.com">Projects</a>
			</p>
		</header>
	);
};

export default NavBar;
