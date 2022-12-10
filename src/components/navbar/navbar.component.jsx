import React from "react";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : "nav--light"}>
			<h3 className={props.darkMode ? "signature" : "signature--light"}>
				<a href="google.com"> Brad Babines</a>
			</h3>

			{/* Dark mode button */}
			<div className="toggleWrapper" id="dark-mode-button">
				<input
					type="checkbox"
					className="dn"
					id="dn"
					onClick={props.toggleDarkMode}
				/>
				<label htmlFor="dn" className="toggle">
					<span className="toggle__handler">
						<span className="crater crater--1"></span>
						<span className="crater crater--2"></span>
						<span className="crater crater--3"></span>
					</span>
					<span className="star star--1"></span>
					<span className="star star--2"></span>
					<span className="star star--3"></span>
					<span className="star star--4"></span>
					<span className="star star--5"></span>
					<span className="star star--6"></span>
				</label>
			</div>

			{/* <div onClick={props.toggleDarkMode} className="dark-mode-button">
				<DarkModeButton />
			</div> */}
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
