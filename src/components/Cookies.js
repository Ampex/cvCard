import React, { useState, useEffect } from 'react'
import { Snackbar, IconButton } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const hours = 1
const now = new Date().getTime('clear_after_2_hours')
const accepted = localStorage.getItem('clear_after_1_hours')

export default function Cookies() {
  const [isAccept, setAccepted] = useState(
    localStorage.getItem('clear_after_1_hours')
  )

  useEffect(() => {
    if (accepted && now - accepted > hours * 60 * 60 * 1000) {
      localStorage.clear('clear_after_1_hours')
      setAccepted(false)
    }
  })

  const handleClose = () => {
    setAccepted(true)
    localStorage.setItem('clear_after_1_hours', now)
  }

  const closeIcon = (
    <IconButton onClick={handleClose} color='inherit' size='small'>
      <HighlightOffIcon />
    </IconButton>
  )

  return (
    <span>
      <Snackbar
        style={{ display: 'flex', flexDirection: 'row' }}
        open={!isAccept}
        message='Cookies here! We use local storage. Cheers!'
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        action={closeIcon}
      />
    </span>
  )
}
