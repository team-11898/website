import './App.css';
import './components/style.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import ImageUpload from './compExtra/ImageUpload';
import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';
function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<section className="team" id="team" name="team">
				Team
				<ImageUpload />
			</section>
			<Gallery />
		</div>
	);
}

export default App;
