import React from "react";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import TimeLine from "./components/TimeLine";

function App() {
	return (
		<>
			<div className="">
				<Intro />
				<Portfolio />
				<TimeLine />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;
