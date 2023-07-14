import useMedia from "./hooks"
import Project from "./Project"
import Content from "./Wrappers/Content"
import Section from "./Wrappers/Section"

export default function ProjectList() {
  const { isMobile } = useMedia()
  const projects = [
    {
      src: "loans",
      title: "HSBC M&S Loans",
      href: "https://bank.marksandspencer.com/personal-loans/",
      description:
        "An application for borrowing money from bank. Manufactured spending (MS) is the process of purchasing cash equivalents with a rewards earning credit card.",
    },
    {
      src: "cards",
      title: "HSBC M&S Cards",
      href: "https://bank.marksandspencer.com/credit-card/",
      description:
        "An application for credit cards ordering. With an M&S Credit Card you will earn rewards points every time you shop.",
    },
    {
      src: "ose",
      title: "Ose",
      href: "https://ose.gov.pl/",
      description:
        "OSE is a public telecommunications network program that gives schools across Poland the opportunity to connect to fast, free and secure network.",
    },
  ]
  return (
    <Section
      id="projects"
      title="Feature participation in projects"
      subheader="As a team member, I participated in building the following applications"
      right
    >
      <Content direction={isMobile ? "column" : "row"}>
        {projects.map(props => (
          <Project {...props} />
        ))}
      </Content>
    </Section>
  )
}
