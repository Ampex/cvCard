import React from 'react'
import FaceIcon from '@material-ui/icons/Face'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import CodeIcon from '@material-ui/icons/Code'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { IconButton, Tooltip } from '@material-ui/core'

export default function Bar() {
  const hrefs = [
    { href: '#header', icon: <FaceIcon /> },
    { href: '#skills', icon: <CodeIcon /> },
    { href: '#jobHistory', icon: <WorkOutlineOutlinedIcon /> },
    { href: '#footer', icon: <AttachFileIcon /> }
  ].map((item, index) => (
    <ol key={index}>
      <Tooltip arrow placement='left' title={item.href.slice(1).toUpperCase()}>
        <IconButton href={item.href} color='primary'>
          {item.icon}
        </IconButton>
      </Tooltip>
    </ol>
  ))

  return <ul>{hrefs}</ul>
}
