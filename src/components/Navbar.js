import React from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const theme = useTheme();

	return (
		<Toolbar
			sx={{
				bgcolor: "background.white",
				paddingTop: 5,
				paddingBottom: 5,
			}}
		>
			<Typography
				variant="h6"
				fontWeight="450"
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					NMHS Robotics
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					paddingRight: 25,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
			</Typography>
		</Toolbar>
	);
}
