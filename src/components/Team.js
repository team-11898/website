import React from "react";
import { Stack, Typography, Grid, Box, Paper } from "@mui/material";
const { teamInfo } = require('./teamInfo');

export const Team = () => {
    return (
		<section className="team" id="team">
			<h1>Team</h1>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2 }} columns={{ xs: 3 }}>
					{teamInfo.map((_, index) => (
						<Grid item xs={1} key={index}>
							<Paper
								sx={{
									height: 300,
									maxWidth: 450,
									margin: "auto",
								}}
							>
								<Grid item>{_.img}</Grid>
								<Grid item>
									{_.name} | {_.grade}
									<br />
									{_.department}
								</Grid>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
}