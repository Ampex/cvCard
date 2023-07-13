import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardHeader, Container, Grid, useTheme } from "@mui/material"
import { SectionProps } from "config/types"

export default function Section({
  title,
  subheader,
  right = false,
  className,
  short,
  yellow,
  children,
  id,
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: `0px 0px ${short ? "0px" : "-200px"}` })
  const {
    palette: { secondary },
  } = useTheme()

  return (
    <Grid
      id={id}
      ref={ref}
      component={yellow ? "div" : "section"}
      container
      alignContent="center"
      sx={short ? { background: yellow ? secondary.main : "inherit" } : { minHeight: "100vh" }}
    >
      <Container sx={{ py: short ? 4 : 10 }}>
        <Card
          className={className}
          color="primary"
          sx={{
            background: short ? "none" : "white",
            transform: isInView
              ? "none"
              : `translate${short ? "Y" : "X"}(${short ? "-60px" : right ? "200px" : "-200px"})`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            p: 3,
          }}
        >
          <CardHeader
            sx={{ textAlign: right ? "right" : "left" }}
            title={title}
            subheader={subheader}
          />
          {children ? <CardContent>{children}</CardContent> : null}
        </Card>
      </Container>
    </Grid>
  )
}
