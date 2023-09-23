import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";

export const About = () => {
    return (
		<div>
			<Container
				sx={{ flexGrow: 1, position: "fixed", left: 100, top: 250 }}
			>
				<Typography
					fontSize={50}
					align="center"
					fontWeight="500"
					sx={{ flexGrow: 1, position: "fixed", paddingLeft: 18 }}
				>
					About :)
				</Typography>
				<Typography
					align="center"
					sx={{ flexGrow: 1, position: "fixed", paddingTop: 15 }}
				>
					Insert stuff
				</Typography>
			</Container>
		</div>
	);
}