import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
		<BrowserRouter>
			<>
				<NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<Routes>
					<Route path="/" element={<SectionOne darkMode={darkMode} />} />

					<Route
						path="/section-two"
						element={<SectionTwo darkMode={darkMode} />}
					/>

					<Route
						path="/section-three"
						element={<SectionThree darkMode={darkMode} />}
					/>

					<Route
						path="/section-four"
						element={<SectionFour darkMode={darkMode} />}
					/>
				</Routes>
				<Footer darkMode={darkMode} />
			</>
		</BrowserRouter>
	);
};

export default App;
