import { theme } from "./config"
import Home from "components/Home"
import Section from "components/Wrappers/Section"
import Content from "components/Wrappers/Content"

import { ThemeProvider } from "@mui/system"
import { MotionConfig } from "framer-motion"
import { Chip, Typography } from "@mui/material"
import Project from "components/Project"

import CV from "components/CV"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig transition={{ ease: "easeOut", duration: 1 }}>
        <Home />
        <Section
          id="skills"
          className="box-shadow"
          title="Skills"
          subheader="A list of skills that will meet your expectations"
        >
          <Content>
            <Chip label="React.js" />
            <Chip label="Javascript" />
            <Chip label="Next.js" />
            <Chip label="Typescript" />
            <Chip label="HTML & CSS" />
            <Chip label="Firebase" />
            <Chip label="MongoDB" />
            <Chip label="Node.js" />
            <Chip label="REST API" />
            <Chip label="Vercel" />
            <Chip label="Redux" />
            <Chip label="Unit Tests" />
            <Chip label="OOP" />
            <Chip label="Github" />
            <Chip label="UI/UX" />
            <Chip label="Material UI" />
            <Chip label="Bootstrap" />
            <Chip label="Atom Design" />
            <Chip label="MVC" />
            <Chip label="Communicate English" />
            <Chip label="Mentoring" />
          </Content>
        </Section>
        <Section
          id="projects"
          title="Feature participation in projects"
          subheader="As a team member, I participated in building the following applications"
          right
        >
          <Content>
            <Project
              title="HSBC M&S Loans"
              src="https://bank.marksandspencer.com/personal-loans/"
              description="An application for borrowing money from bank."
            />
            <Project
              title="HSBC M&S Cards"
              src="https://bank.marksandspencer.com/credit-card/"
              description="An application for credit cards ordering."
            />
            <Project
              title="Ose"
              src="https://ose.gov.pl/"
              description="OSE is a public telecommunications network program that gives schools across Poland the opportunity to connect to fast, free and secure network."
            />
          </Content>
        </Section>
        <Section
          id="cv"
          title="Wanna work together?"
          subheader="Cooperation & Curriculum vitae"
          className="box-shadow"
        >
          <CV />
        </Section>

        <Section id="footer" short yellow>
          <Content>
            <img alt="Code Wizard" src="images/logo-vertical.svg" width={160} />
            <Typography variant="caption">
              Copyright © 2023 <strong>Code Wizard</strong>. All rights reserved.
            </Typography>
          </Content>
        </Section>
      </MotionConfig>
    </ThemeProvider>
  )
}
