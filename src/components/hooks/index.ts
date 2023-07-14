import { useMediaQuery, useTheme } from "@mui/material"

export default function useMedia() {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down("lg"))

  return { isMobile }
}
