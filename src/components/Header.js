import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { makeStyles } from '@material-ui/core/styles'
import img from './media/bkasperski.jpg'
import { Avatar, Typography, IconButton } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  avatar: {
    width: '200px !important',
    height: '200px !important'
  },
  font: { fontFamily: 'Jura, sans-serif', marginBottom: 10 },
  progress: {
    width: 800
  }
})

const icons = [
  { icon: <GitHubIcon />, url: 'https://github.com/Ampex' },
  {
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/bkasperski-frontend/'
  },
  { icon: <MailIcon />, url: 'mailto:kasperski.blazej@gmail.com' }
].map((item, index) => (
  <IconButton color='inherit' target='_blank' href={item.url} key={index}>
    {item.icon}
  </IconButton>
))

const description = 'I am a Frontend Developer'

export default function Header() {
  const classes = useStyles()

  const handleEnter = e => {
    const target = e.target
    target.className = 'hover'
    setTimeout(() => (target.className = ''), 1000)
  }

  const fullName = 'Błażej Kasperski'
  const fullNameAnim = [...fullName].map((letter, index) => (
    <div className='' onMouseEnter={handleEnter} key={index}>
      {letter}
    </div>
  ))

  return (
    <div id='header'>
      <div>
        <Avatar className={classes.avatar} alt={fullName} src={img} />
        <Typography className={classes.font} variant='h3'>
          {fullNameAnim}
        </Typography>
        <Typography className={classes.font} variant='h6'>
          <ReactTypingEffect speed={100} text={description} />
        </Typography>
        <div className='icons'>{icons}</div>
      </div>
    </div>
  )
}
