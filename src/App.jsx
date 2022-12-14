import React from "react";

import NavBar from "./components/navbar/navbar.component";
import SectionOne from "./components/section-one/section-one.component";
import SectionTwo from "./components/section-two/section-two.component";
import SectionThree from "./components/section-three/section-three.component";
import SectionFour from "./components/section-four/section-four.component";
import Footer from "./components/footer/footer.component";

const App = () => {
	const [darkMode, setDarkMode] = React.useState(true);

	const toggleDarkMode = () => {
		setDarkMode((previousMode) => !previousMode);
	};

	return (
		<>
			<NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<SectionOne darkMode={darkMode} />
			<SectionTwo darkMode={darkMode} />
			<SectionThree darkMode={darkMode} />
			<SectionFour darkMode={darkMode} />
			<Footer darkMode={darkMode} />
		</>
	);
};

export default App;
