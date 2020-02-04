import React, { useState } from 'react'
import { Button, Typography, Switch, CircularProgress } from '@material-ui/core'

export default function Footer() {
  const [isCheck, setCheck] = useState({
    check: false,
    loading: false
  })

  const handleChange = () => {
    if (!isCheck.check) {
      setCheck({ loading: !isCheck.loading })
      setTimeout(() => {
        setCheck({
          check: !isCheck.check,
          loading: isCheck.loading
        })
      }, 1200)
    } else {
      setCheck({ check: false, loading: false })
    }
  }

  return (
    <div>
      <div className='footer'>
        <Typography variant='h4'>Would you like to view my CV?</Typography>
        <Typography variant='inherit'>{`Just confirm that you are not a robot, and you are free to download ;)`}</Typography>
        <Switch
          disabled={isCheck.loading}
          onChange={handleChange}
          value={isCheck.check}
        />
        <Button
          href={
            'https://drive.google.com/open?id=1S8eWwzAEpibdEhp45NilMf2ySCFoucd1'
          }
          target={'_blank'}
          variant='contained'
          color='primary'
          disabled={!isCheck.check}
          size='large'
        >
          Download
          {isCheck.loading && (
            <CircularProgress
              size={30}
              thickness={2}
              style={{ position: 'absolute' }}
            />
          )}
        </Button>
        <Typography
          style={{ position: 'absolute', bottom: 50 }}
          variant='caption'
        >
          © 2020 by bkasperski.pl
        </Typography>
      </div>
    </div>
  )
}
