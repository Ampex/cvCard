import { Typography } from "@mui/material"
import Content from "./Wrappers/Content"
import Section from "./Wrappers/Section"

export default function Footer() {
  return (
    <Section id="footer" short yellow>
      <Content>
        <img alt="Code Wizard" src="image/logo-vertical.svg" width={160} />
        <Typography variant="caption">
          Copyright © 2023 <strong>Code Wizard</strong>. All rights reserved.
        </Typography>
      </Content>
    </Section>
  )
}
