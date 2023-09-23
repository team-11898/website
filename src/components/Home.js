import React from 'react'
import { Typography, Button, Box, Grid, Stack } from "@mui/material";

export const Home = () => {
  return (
        <Grid container rowSpacing={2}>
            <Grid xs={6} sx={{ textAlign: "center", marginTop: 15 }}>
                <Stack
                    spacing={{ xs: 4, sm: 6 }}
                    direction="column"
                    useFlexGap
                    flexWrap="wrap"
                    alignItems="center"
                >
                    <Typography
                        fontSize={50}
                        fontWeight="500"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        Team 11898: The Robukets
                    </Typography>
                    <Typography>
                        :)
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
  );
}