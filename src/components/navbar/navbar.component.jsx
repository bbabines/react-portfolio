import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<header className={props.darkMode ? "navbar" : "nav--light"}>
			<h3 className={props.darkMode ? "signature" : "signature--light"}>
				<Link to="/"> Brad Babines</Link>
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
				<Link to="/">Home</Link>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<Link to="/section-two">About</Link>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<Link to="/section-three">Experience</Link>
			</p>
			<p className={props.darkMode ? "nav-links" : "nav-links--light"}>
				<Link to="/section-four">Projects</Link>
			</p>
		</header>
	);
};

export default NavBar;
