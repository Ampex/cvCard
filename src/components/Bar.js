import React from 'react'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import { IconButton, Link } from '@material-ui/core'

const hrefs = ['#header', '#skills', '#jobHistory', '#footer'].map(
  (href, index) => (
    <ol key={index}>
      <Link href={href}>
        <IconButton>
          <FiberManualRecordOutlinedIcon />
        </IconButton>
      </Link>
    </ol>
  )
)

export default function Bar() {
  return <ul>{hrefs}</ul>
}
