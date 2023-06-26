import { Grid, Typography, CSSObject } from "@mui/material"
import { motion } from "framer-motion"

export default function Home() {
  const customStyles: CSSObject = {
    height: "100vh",
    background: "url('images/bg/test.svg')",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  }
  return (
    <Grid
      container
      direction="column"
      sx={customStyles}
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div animate={{ opacity: 1, width: 240 }} initial={{ opacity: 0, width: 160 }}>
        <img alt="Code Wizard" src="images/logotype.svg" />
      </motion.div>
      <motion.p initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }}>
        <Typography fontWeight={600} fontSize={40}>
          Code Wizard
        </Typography>
      </motion.p>
    </Grid>
  )
}
