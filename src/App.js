import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import {Navbar} from "./components/Navbar";
import {Section} from "./components/Section"

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Section />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
