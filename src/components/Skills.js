import React from 'react'
import { LinearProgress, Typography } from '@material-ui/core'

const skillItems = [
  { title: 'JavaScript ES6', number: 70 },
  { title: 'React.js', number: 80 },
  { title: 'React Router', number: 60 },
  { title: 'Node.js', number: 20 },
  { title: 'Git', number: 50 },
  { title: 'HTML', number: 60 },
  { title: 'REST API', number: 60 },
  { title: 'CSS, SASS', number: 80 },
  { title: 'Material UI, other UIs', number: 80 }
].map((item, index) => (
  <div style={{ margin: '12px 0', width: '100%' }} key={index}>
    <div>{item.title}</div>
    <LinearProgress value={item.number} variant='determinate' />
  </div>
))

export default function Skills() {
  return (
    <div id='skills'>
      <div>
        <Typography style={{ marginBottom: 15 }} variant='h4'>
          Skills
        </Typography>
        {skillItems}
      </div>
    </div>
  )
}
