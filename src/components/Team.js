import React from "react";
import { Stack, Typography, Grid, Box, Paper } from "@mui/material";
const { teamInfo } = require('./teamInfo');

export const Team = () => {
    return (
		<section className="team" id="team">
            Team
			<Box sx={{ flexGrow: 1}}>
				<Grid
					container
					spacing={{ xs: 2 }}
					columns={{ xs: 2 }}
				>
					{teamInfo.map((_, index) => (
						<Grid item xs={1} key={index}>
                            <Paper sx={{ height: 500, width: 250}}>
                                {_.name}
                                {_.grade}
                                {_.department}
                            </Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
}