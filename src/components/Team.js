import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Button, ButtonGroup, Typography, Grid, Box, Paper, Avatar, IconButton } from "@mui/material";
const { teamInfo } = require('./teamInfo');

export const Team = () => {
    return (
		<section className="team" id="team">
			<Zoom triggerOnce="true" delay={3}>
				<h1 className="title">Team</h1>
				<Box sx={{ flexGrow: 1, marginTop: 10 }}>
					<Grid container spacing={{ xs: 2 }} columns={{ xs: 3 }}>
						{teamInfo.map((_, index) => (
								<Grid item xs={1} key={index}>
									<Paper
										sx={{
											height: 400,
											maxWidth: 300,
											margin: "auto",
											borderRadius: 5,
											boxShadow: "none",
											backgroundColor: "transparent",
										}}
									>
										<Grid item>
											<IconButton size="large">
												<Avatar
													sx={{
														width: 100,
														height: 100,
													}}
													src={_.img}
												/>
											</IconButton>
										</Grid>
										<Grid item>
											<p className="head">
												{_.name} | {_.grade}
												<br />
												{_.department}
												<br />
											</p>
											<div className="desc">
												{_.description}
											</div>
										</Grid>
									</Paper>
								</Grid>
							))}
						{/* {teamInfo
							.filter((i) => i.department == "Hardware")
							.map((_, index) => (
								<Grid item xs={1} key={index}>
									<Paper
										sx={{
											height: 400,
											maxWidth: 300,
											margin: "auto",
											borderRadius: 5,
											boxShadow: "none",
											backgroundColor: "transparent",
										}}
									>
										<Grid item>
											<IconButton size="large">
												<Avatar
													sx={{
														width: 100,
														height: 100,
													}}
													src={_.img}
												/>
											</IconButton>
										</Grid>
										<Grid item>
											<p className="head">
												{_.name} | {_.grade}
												<br />
												{_.department}
												<br />
											</p>
											<div className="desc">
												{_.description}
											</div>
										</Grid>
									</Paper>
								</Grid>
							))}
						{teamInfo.map((_, index) => (
								<Grid item xs={1} key={index}>
									<Paper
										sx={{
											height: 400,
											maxWidth: 300,
											margin: "auto",
											borderRadius: 5,
											boxShadow: "none",
											backgroundColor: "transparent",
										}}
									>
										<Grid item>
											<IconButton size="large">
												<Avatar
													sx={{
														width: 100,
														height: 100,
													}}
													src={_.img}
												/>
											</IconButton>
										</Grid>
										<Grid item>
											<p className="head">
												{_.name} | {_.grade}
												<br />
												{_.department}
												<br />
											</p>
											<div className="desc">
												{_.description}
											</div>
										</Grid>
									</Paper>
								</Grid>
							))} */}
					</Grid>
				</Box>
			</Zoom>
		</section>
	);
}