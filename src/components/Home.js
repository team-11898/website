import React from 'react'
import "./style.css"
import { Typography, Button, Box, Grid, Stack } from "@mui/material";
import background from "../assets/home.png"

export const Home = () => {
  return (
		<section className="home" id="home">
            <Stack
                spacing={{ xs: 2, sm: 3 }}
                direction="column"
                useFlexGap
                flexWrap="wrap"
            >
                <Typography
                    fontFamily={"Poppins"}
                    fontSize={50}
                    fontWeight="550"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    Team 11898: The Robuckets
                </Typography>
                <Typography fontFamily={"Poppins"}>NMHS Robotics</Typography>
            </Stack>
		</section>
  );
}