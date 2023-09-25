import React from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
	Link,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
export const Navbar = () => {
    const theme = useTheme();
    window.onscroll = function (e) {
		var scrollY = window.scrollY || document.documentElement.scrollTop;
		var navbar = document.querySelector(".navbar");
		var height = -navbar.clientHeight;
		navbar.style.transition = "transform 0.1s";

		scrollY <= Math.max(this.lastScroll, 50) ||
		window.innerWidth <= 1200 ||
		this.loaded === undefined
			? (navbar.style.transform = "translateY(0px)")
			: (navbar.style.transform = "translateY(" + height + "px)");

		this.lastScroll = scrollY;
		this.loaded = true;
	};
	return (
		<Toolbar
			sx={{
				paddingTop: 1,
				userSelect: "none",
				paddingBottom: 1,
				width: "100%",
				position: "fixed",
			}}
			className="navbar"
		>
			<Typography
				fontSize="16"
				fontWeight="450"
				fontFamily={"Poppins"}
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#D8D9DA",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
					fontSize: 25,
				}}
			>
				<Link
					to="home"
					style={{ textDecoration: "none", color: "#D8D9DA" }}
					ignoreCancelEvents={true}
				>
					Robuckets
					<Box
						width={50}
						component="img"
						sx={{
							flexGrow: 1,
							position: "fixed",
							paddingLeft: 1,
						}}
						alt="bucket"
						src={require("../assets/robucket.png")}
					/>
				</Link>
			</Typography>
			<Typography
				fontFamily={"Poppins"}
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					userSelect: "none",
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
					fontSize: 15,
					marginLeft: 15,
				}}
			>
				<Link
					to="home"
					spy={false}
					smooth={true}
					offset={-50}
					duration={250}
					ignoreCancelEvents={true}
				>
					Home
				</Link>
			</Typography>
			<Typography
				fontFamily={"Poppins"}
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					userSelect: "none",
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
					fontSize: 15,
				}}
			>
				<Link
					to="about"
					spy={false}
					smooth={true}
					offset={-50}
					duration={250}
					ignoreCancelEvents={true}
				>
					About
				</Link>
			</Typography>
			<Typography
				fontFamily={"Poppins"}
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					userSelect: "none",
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
					fontSize: 15,
				}}
			>
				<Link
					to="gallery"
					spy={false}
					smooth={true}
					offset={-50}
					duration={250}
					ignoreCancelEvents={true}
				>
					Gallery
				</Link>
			</Typography>
			<Typography
				fontFamily={"Poppins"}
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					userSelect: "none",
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
					fontSize: 15,
				}}
			>
				<a
					style={{ textDecoration: "none", color: "inherit" }}
					href="https://www.youtube.com"
				>
					Donate
				</a>
			</Typography>
		</Toolbar>
	);
}
