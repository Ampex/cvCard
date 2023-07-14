import { useState } from "react"
import { Typography, Button, Switch } from "@mui/material"
import Content from "components/Wrappers/Content"
import Section from "./Wrappers/Section"

export default function CV() {
  const [disabled, setDisabled] = useState(true)

  const onChange = () => setDisabled(prev => !prev)
  const onClick = () => {
    onChange()
    window.location =
      "mailto:biuro@bkasperski.pl?subject=Mail from CODEWIZARD.PL" as unknown as Location
  }

  return (
    <Section
      id="cv"
      title="Wanna work together?"
      subheader="Cooperation & Curriculum vitae"
      className="box-shadow"
    >
      <Content direction="column">
        <Typography>Don't wait, let's start cooperation or send a request for a CV.</Typography>
        <Typography>
          To make a request or send an email, use the button below and share with me all the
          information about the job offer.
        </Typography>
        <Switch color="secondary" checked={!disabled} onChange={onChange} />
        <Button color="secondary" disabled={disabled} variant="contained" onClick={onClick}>
          Send a request
        </Button>
      </Content>
    </Section>
  )
}
