import { ThumbUp } from "@mui/icons-material"
import { Fade, Grid, Typography } from "@mui/material"

export default function ThankYou() {
  return (
    <Fade in>
      <Grid container textAlign="center" alignItems="center" rowGap={2} direction="column" p={4}>
        <ThumbUp color="success" sx={{ fontSize: "6rem" }} />
        <Typography variant="h4">Thank you form sending a message!</Typography>
        <Typography variant="h6">I will contact you as soon as possible.</Typography>
      </Grid>
    </Fade>
  )
}
