import React from "react";
import { Button, ButtonGroup, Typography, Grid, Box, Paper, Avatar, IconButton } from "@mui/material";
const { teamInfo } = require('./teamInfo');

export const Team = () => {

    const pageDept = "Business";
    function changeDept(dept) {
        pageDept = dept
    }
    // const page = business
    // const business = teamInfo.filter(i => i.department === "Business");
    // const hardware = teamInfo.filter(i => i.department === "Hardware");
    // const software = teamInfo.filter(i => i.department === "Software");
    return (
		<section className="team" id="team">
			<h1 className="title">Team</h1>
			{/* <ButtonGroup>
				<Button onClick={() => changeDept("Business")}>Business</Button>
				<Button onClick={() => changeDept("Hardware")}>Hardware</Button>
				<Button onClick={() => changeDept("Software")}>Software</Button>
			</ButtonGroup> */}
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
											sx={{ width: 100, height: 100 }}
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
									<div className="desc">{_.description}</div>
								</Grid>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
}