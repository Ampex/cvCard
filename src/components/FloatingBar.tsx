import { Home, AutoAwesome, PermMedia, Link as LinkIcon } from "@mui/icons-material"
import { Card, IconButton, Stack, Tooltip } from "@mui/material"
import { Link } from "react-scroll"

const elements = [
  { section: "home", icon: <Home /> },
  { section: "skills", icon: <AutoAwesome /> },
  { section: "projects", icon: <PermMedia /> },
  { section: "cv", icon: <LinkIcon /> },
]

export default function FloatingBar() {
  const iconList = elements.map(({ section, icon }) => (
    <Link to={section} smooth>
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
    <Card
      sx={{
        background: "var(--secondary)",
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Stack p={1} spacing={1}>
        {iconList}
      </Stack>
    </Card>
  )
}
