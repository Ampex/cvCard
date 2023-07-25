import { Home, AutoAwesome, PermMedia, Link as LinkIcon } from "@mui/icons-material"
import { Card, Fade, IconButton, Stack, Tooltip } from "@mui/material"
import { Link } from "react-scroll"
import useMedia from "./hooks"

const elements = [
  { section: "home", icon: <Home /> },
  { section: "skills", icon: <AutoAwesome /> },
  { section: "projects", icon: <PermMedia /> },
  { section: "cv", icon: <LinkIcon /> },
]

export default function FloatingBar() {
  const { isMobile } = useMedia()
  const iconList = elements.map(({ section, icon }) => (
    <Link to={section} smooth key={section}>
      <Tooltip
        PopperProps={{ popperOptions: { strategy: "fixed" } }}
        title={section.toUpperCase()}
        placement="left"
      >
        <IconButton>{icon}</IconButton>
      </Tooltip>
    </Link>
  ))

  return (
    <Fade in={!isMobile}>
      <Card
        sx={{
          background: ({ palette }) =>
            palette.mode === "light" ? palette.secondary.main : "background.default",
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack p={1} spacing={1}>
          {iconList}
        </Stack>
      </Card>
    </Fade>
  )
}
