import { Chip } from "@mui/material"
import Content from "./Wrappers/Content"
import Section from "./Wrappers/Section"

export default function Skills() {
  return (
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
  )
}
