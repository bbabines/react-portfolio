import React from "react";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : "nav--light"}>
			<h3 className={props.darkMode ? "signature" : "signature--light"}>
				<a href=".section-one"> Brad Babines</a>
			</h3>

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

			<p
				id="home-link"
				className={props.darkMode ? "nav-links" : "nav-links--light"}
			>
				<a href=".section-one">Home</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href=".section-two">About</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href=".section-three">Experience</a>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<a href=".section-four">Projects</a>
			</p>
		</header>
	);
};

export default NavBar;
