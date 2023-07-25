import { createTheme, Shadows } from "@mui/material"

const primary = "#3F0962"
const secondary = "#FEDE5A"

export const theme = createTheme({
  typography: {
    fontFamily: `"Baloo 2", "Helvetica", "Arial", sans-serif`,
    h5: {
      color: primary,
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
  },
  palette: {
    // mode: "dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  shape: {
    borderRadius: 20,
  },
  shadows: Array(25).fill("none") as Shadows,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: 36,
          fontWeight: 700,
        },
      },
    },
  },
})
