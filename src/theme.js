import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: "Poppins, sans-serif",
		fontSize: 20,
		color: "#090d10",
	},
	palette: {
		primary: {
			light: "#757ce8",
			main: "#020303",
			dark: "#002884",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000",
		},

		background: {
			white: "#ECF0F3",
			black: "#131316",
			main: "#f9fafb",
		},
	},
});
