import { Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { useInView } from "framer-motion"
import { useRef } from "react"

type TSection = { title: string; right?: boolean }

export default function Section({ title, right = false }: TSection) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -400px" })

  return (
    <Grid ref={ref} component="section" container alignContent="center">
      <Container sx={{ py: 10 }}>
        <Card
          sx={{
            transform: isInView ? "none" : `translateX(${right ? "200px" : "-200px"})`,
            textAlign: right ? "right" : "left",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <CardContent>
            <Typography variant="h3">{title}</Typography>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  )
}
