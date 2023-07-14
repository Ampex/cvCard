import { theme } from "./config"

import { ThemeProvider } from "@mui/system"
import { MotionConfig } from "framer-motion"

import Home from "components/Home"
import Skills from "components/Skills"
import CV from "components/CV"
import FloatingBar from "components/FloatingBar"
import ProjectList from "components/ProjectList"
import Footer from "components/Footer"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig transition={{ ease: "easeOut", duration: 1 }}>
        <FloatingBar />
        <Home />
        <Skills />
        <ProjectList />
        <CV />
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  )
}
