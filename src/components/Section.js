import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Navbar } from "./Navbar";
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

export const Section = () => {
	return (
        // <Navbar/>
        <div>
            <Link
                activeClass="active"
                to="sectionId"
                spy={true}
                smooth={true}
                duration={500}
            >Test 1</Link>
            <Link
                activeClass="active"
                to="sectionId"
                spy={true}
                smooth={true}
                duration={500}
            >Test 1</Link>
        </div>


		// <Link
		// 	activeClass="active"
		// 	to="sectionId"
		// 	spy={true}
		// 	smooth={true}
		// 	duration={500}
		// >
		// 	<Navbar />
		// 	<Home />
		// 	<About />
		// </Link> */}
	);
}
