import React from "react";

const NavBar = () => {
	// const [lightMode, setLightMode] = useState(false);

	return (
		<header className="navbar">
			<h3 className="signature">
				<a href="google.com"> Brad Babines</a>
			</h3>

			<button type="button">Light Mode</button>
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
