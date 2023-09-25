import { Typography, Button, Box, Container, Grid, Item, ImageList, ImageListItem} from "@mui/material";
import React from "react";

const galleryData = [
    {
        img: require("../assets/cad1.png"),
        title: "cad1",
    },
    {
        img: require("../assets/cad2.png"),
        title: "cad1",
    },
    {
        img: require("../assets/IMG_1588.png"),
        title: "robot",
    },

]
export const Gallery = () => {
	return (
		<section className="gallery" id="gallery">
			<Typography
				fontSize={30}
				fontWeight="bold"
				sx={{ fontFamily: "Poppins, sans-serif" }}
				marginBottom={5}
			>
				Gallery
			</Typography>
			<ImageList
				sx={{ width: 1500, height: 500 }}
				variant="quilted"
				cols={4}
				rowHeight={250}
                gap={10}
			>
				{galleryData.map((item) => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							srcSet={`${item.img}?w=164&h=164&fit=cover&auto=format&dpr=2 2x`}
							src={`${item.img}?w=164&h=164&fit=cover&auto=format`}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</section>
	);
};
