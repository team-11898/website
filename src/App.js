import './App.css';
import './components/style.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import ImageUpload from './compExtra/ImageUpload';
import React, { useState, useEffect } from 'react';
import { Gallery } from './components/Gallery';
import { Fade } from 'react-awesome-reveal';
import { Typography } from '@mui/material';
import { Team } from './components/Team';

function App() {
	return (
		<div className="App">
			<Navbar />
            {/* <Fade triggerOnce="false"> */}
            <Home />
            <About />
            <Team/>
            {/* <section className="team" id="team" name="team">
                Team
                <ImageUpload />
            </section> */}
            <Gallery />
            <section className="sponsors" id="sponsors">
                <div style={{margin: 50}}>
                    <h1 className="title">Sponsors</h1>
                    <p>None(please sponsor)</p>
                </div>
                <h1 className="title" style={{marginTop: 10,}}>
                    Contact Us
                </h1>
                <a
                    style={{color: "inherit" }}
                    href="mailto:nmhsrobukets@gmail.com"
                >
                    nmhsrobukets@gmail.com
                </a>
            </section>
            {/* </Fade> */}
		</div>
	);
}

export default App;
