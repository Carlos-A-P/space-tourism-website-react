import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
	const [bg, setBG] = useState("home");
	return (
		<Router className="App">
			<div className={`page-wrap ${bg}`}>
				<Header />
				<Routes>
					{/* pass function to current page compont to set the background class */}
					<Route index element={<Home changeBG={(x) => setBG(x)} />} />
					<Route
						path="/destination"
						element={<Destination changeBG={(x) => setBG(x)} />}
					/>
					<Route path="/crew" element={<Crew changeBG={(x) => setBG(x)} />} />
					<Route
						path="/technology"
						element={<Technology changeBG={(x) => setBG(x)} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
