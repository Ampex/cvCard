import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import { ProjectProps } from "config/types"

export default function Project({ src, href, title, description }: ProjectProps) {
  const onClick = () => window.open(href)

  return (
    <Card className="box-shadow" sx={{ maxWidth: 345, background: "#f6f6f6" }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={`${window.location.href}/image/projects/${src}.png`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
