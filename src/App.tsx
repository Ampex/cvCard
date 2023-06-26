import Home from "./components/Home"
import Section from "./components/Section"
import { theme } from "./config"
import { ThemeProvider } from "@mui/system"
import { MotionConfig } from "framer-motion"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig transition={{ ease: "easeOut", duration: 1 }}>
        <Home />
        <Section title="Skills" />
        <Section title="Project" right />
      </MotionConfig>
    </ThemeProvider>
  )
}
