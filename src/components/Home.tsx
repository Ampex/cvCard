import { Grid, Typography, CSSObject, Fade, Button, Container } from "@mui/material"
import { Link } from "react-scroll"
import useMedia from "./hooks"
import Content from "./Wrappers/Content"

export default function Home() {
  const { isMobile } = useMedia()
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
          <Grid
            direction={isMobile ? "column-reverse" : "row"}
            container
            justifyContent={isMobile ? "space-evenly" : "space-between"}
            sx={customStyles}
            alignItems="center"
          >
            <Grid item>
              <Content direction="column">
                <Typography variant={isMobile ? "h3" : "h2"}>
                  Hi! This is <strong>Code Wizard</strong>...
                </Typography>
                <Typography variant="h4">I am a Senior Software Engineer</Typography>
                <Typography variant="h6" fontWeight={200} paragraph>
                  I create innovative Web Applications
                </Typography>
                <Link to="skills" smooth>
                  <Button size="large" variant="contained">
                    Check my skills
                  </Button>
                </Link>
              </Content>
            </Grid>
            <Grid item>
              <Content>
                <img alt="Code Wizard" src="image/logotype.svg" width={isMobile ? 100 : 240} />
              </Content>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Fade>
  )
}
