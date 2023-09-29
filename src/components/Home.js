import React from 'react'
import "./style.css"
import { Typography, Button, Box, Grid, Stack } from "@mui/material";
import background from "../assets/home.png"
import { Fade, Hinge, JackInTheBox, Zoom, Bounce } from "react-awesome-reveal";

export const Home = () => {
  return (
		<section className="home" id="home">
			<Zoom triggerOnce="true" delay={3}>
				<div style={{ margin: 50 }}>
					<h1 className="title">
						Team 11898
						<br />
						The Robuckets
					</h1>
				</div>
				<h1 className="subtitle" style={{ marginTop: 10 }}>
					NMHS Robotics
				</h1>
				{/* <Grid container rowSpacing={4}>
					<Stack direction="row">
						<Grid
							xs={6}
							sx={{
								textAlign: "center",
								marginTop: 15,
								marginLeft: 15,
							}}
						>
							<div style={{ margin: 50 }}>
								<h1 className="title">
									Team 11898
									<br />
									The Robuckets
								</h1>
							</div>
							<h1 className="subtitle" style={{ marginTop: 10 }}>
								NMHS Robotics
							</h1>
						</Grid>
						<Grid xs={6} sx={{ textAlign: "center" }}>
							<Box
								width={700}
								component="img"
								alt="ftc"
								src={require("../assets/ftc.png")}
							/>
						</Grid>
					</Stack>
				</Grid> */}
			</Zoom>
		</section>
  );
}