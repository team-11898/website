import React from "react";
import { Typography, Button, Box, Container, Grid, Stack} from "@mui/material";
import "./style.css";
import { Fade, Slide } from "react-awesome-reveal";
export const About = () => {
    return (
		<div>
			<Fade cascade triggerOnce="true" delay={4}>
				<section className="about" id="about">
					<Grid container rowSpacing={4}>
						<Stack direction="row">
							<Grid
								xs={6}
								sx={{
									textAlign: "center",
									marginTop: 15,
									marginLeft: 15,
								}}
							>
								<Typography
									fontSize={60}
									fontWeight="bold"
									sx={{ fontFamily: "Poppins, sans-serif" }}
									marginBottom={5}
								>
									About
								</Typography>
								<Typography
									fontSize={20}
									fontWeight="500"
									sx={{
										flexGrow: 1,
										fontFamily: "Poppins, sans-serif",
									}}
								>
									WWe are Newark Memorial High School's
									Robotics Club! Now entering our second year
									recovering from COVID, we are more excited
									than ever to live up to our program's
									mission: de-stigmatizing STEM fields in our
									community and shaping tomorrow's engineers.
									We currently only consist of 1 FTC team, The
									Robuckets (11898), but hope to expand in the
									future. Last season, we appeared at the
									NorCal Regionals, and are driving to go even
									beyond that this year!
								</Typography>
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
					</Grid>
				</section>
			</Fade>
			<Fade triggerOnce="true" delay={3}>
				<section className="mission" id="mission">
					<Grid container rowSpacing={2}>
						<Grid xs={3} sx={{ textAlign: "center" }}></Grid>
						<Grid xs={6} sx={{ textAlign: "center" }}>
							<Typography
								fontSize={60}
								fontWeight="bold"
								sx={{ fontFamily: "Poppins, sans-serif" }}
								marginBottom={5}
							>
								About First
							</Typography>
							<Typography
								fontSize={20}
								fontWeight="500"
								sx={{
									flexGrow: 1,
									fontFamily: "Poppins, sans-serif",
								}}
							>
								FIRST is a robotics program founded by Dean
								Kamen, the inventor of the segway. The mission
								of FIRST is to inspire young people to take
								interest in fields relating to Science,
								Technology, Engineering, and Mathematics (STEM),
								with a focus on robotics. FIRST is designed
								specifically with students in mind, in order to
								teach the newest generations about problem
								solving and communication. <br />
								<br />
								FIRST Tech Challenge is about completing a very
								challenging project with limits on your budget
								and a firm deadline. It's about working and
								cooperating as a team, with support from
								knowledgeable mentors and peers.
							</Typography>
						</Grid>
						<Grid
							xs={3}
							sx={{ textAlign: "center", marginTop: 15 }}
						></Grid>
					</Grid>
				</section>
			</Fade>
		</div>
	);
}