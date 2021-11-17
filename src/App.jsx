import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
	return (
		<Router className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Destination" exact component={Destination} />
				<Route path="/Crew" exact component={Crew} />
				<Route path="/Technology" exact component={Technology} />
			</Switch>
		</Router>
	);
}

export default App;
