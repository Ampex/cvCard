import { Grid, Typography, CSSObject, Fade, Button } from "@mui/material"
import { motion } from "framer-motion"
import Content from "./Wrappers/Content"

export default function Home() {
  const customStyles: CSSObject = {
    height: "100vh",
    background: "url('images/yellow.svg')",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  }

  return (
    <Fade in>
      <Grid container justifyContent="space-around" sx={customStyles} alignItems="center">
        <Grid item>
          <Content direction="column">
            <Typography variant="h2">
              Hi! This is <strong>Code Wizard</strong>...
            </Typography>
            <Typography variant="h4">I am a Software Engineer</Typography>
            <Typography variant="h6" fontWeight={200} paragraph>
              I create innovative Website's
            </Typography>
            <Button size="large" variant="contained">
              Read more
            </Button>
          </Content>
        </Grid>
        <Grid item>
          <motion.div animate={{ opacity: 1, width: 240 }} initial={{ opacity: 0, width: 160 }}>
            <img alt="Code Wizard" src="images/logotype.svg" />
          </motion.div>
        </Grid>
      </Grid>
    </Fade>
  )
}
