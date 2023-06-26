import { createTheme, Shadows } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: `"Baloo 2", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      main: "#3F0962",
    },
    secondary: {
      main: "#FEDE5A",
    },
  },
  shape: {
    borderRadius: 20,
  },
  shadows: Array(25).fill("none") as Shadows,
})
