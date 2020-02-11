import React from 'react'
import FaceIcon from '@material-ui/icons/Face'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import CodeIcon from '@material-ui/icons/Code'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import {
  IconButton,
  Tooltip,
  useMediaQuery,
  Typography
} from '@material-ui/core'

const Bar = () => {
  const matches = useMediaQuery('(min-width:650px)')
  const padding = !matches && 0

  const hrefs = [
    { href: '#header', icon: <FaceIcon /> },
    { href: '#skills', icon: <CodeIcon /> },
    { href: '#job History', icon: <WorkOutlineOutlinedIcon /> },
    { href: '#footer', icon: <AttachFileIcon /> }
  ].map((item, index) => (
    <ol key={index}>
      <Tooltip arrow placement='left' title={item.href.slice(1).toUpperCase()}>
        <IconButton
          disableTouchRipple={!matches}
          style={{ padding: padding }}
          href={item.href}
          color='primary'
        >
          {item.icon}
        </IconButton>
      </Tooltip>
      {!matches && (
        <Typography variant='caption'>
          {item.href.slice(1).toUpperCase()}
        </Typography>
      )}
    </ol>
  ))

  return <ul>{hrefs}</ul>
}

export default Bar
