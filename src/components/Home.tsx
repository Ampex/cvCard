import { Grid, Typography, CSSObject, Fade, Button, Container } from "@mui/material"
import { motion } from "framer-motion"
import Content from "./Wrappers/Content"
import { Link } from "react-scroll"

export default function Home() {
  const customStyles: CSSObject = {
    height: "100vh",
    background: "url('image/yellow.svg')",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  }

  return (
    <Fade in>
      <Grid id="home" sx={customStyles}>
        <Container>
          <Grid container justifyContent="space-between" sx={customStyles} alignItems="center">
            <Grid item>
              <Content direction="column">
                <Typography variant="h2">
                  Hi! This is <strong>Code Wizard</strong>...
                </Typography>
                <Typography variant="h4">I am a Senior Software Engineer</Typography>
                <Typography variant="h6" fontWeight={200} paragraph>
                  I create innovative Websites
                </Typography>
                <Link to="skills" smooth>
                  <Button size="large" variant="contained">
                    Check my skills
                  </Button>
                </Link>
              </Content>
            </Grid>
            <Grid item>
              <motion.div animate={{ opacity: 1, width: 240 }} initial={{ opacity: 0, width: 160 }}>
                <img alt="Code Wizard" src="image/logotype.svg" />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Fade>
  )
}
