import React, { useState } from 'react'
import {
  Button,
  Typography,
  Switch,
  CircularProgress,
  Grow
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
export default function Footer() {
  const [isCheck, setCheck] = useState({
    check: false,
    loading: false,
    isClicked: false
  })
  const [isClick, setClick] = useState(false)

  const handleChange = () => {
    if (!isCheck.check) {
      setCheck({ loading: !isCheck.loading })
      setTimeout(() => {
        setCheck({
          check: !isCheck.check,
          loading: isCheck.loading
        })
        setClick(false)
      }, 1200)
    } else {
      setCheck({ check: false, loading: false, isClicked: false })
    }
  }

  return (
    <div id='footer'>
      <div>
        <Typography style={{ marginBottom: 80 }} variant='h4'>
          Curriculum Vitae
        </Typography>
        <Typography variant='h4'>Would you like to view my CV?</Typography>
        <Typography
          style={{ marginBottom: 25 }}
          variant='inherit'
        >{`Just confirm that you are not a robot, and you are free to download ;)`}</Typography>
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
          onClick={() => setClick(true)}
          style={{ marginTop: 25 }}
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
        <Grow in={isCheck.check && isClick}>
          <Alert
            style={{
              marginTop: 50,
              boxShadow: '0 16px 32px 0 rgba(0,31,109,0.08)'
            }}
          >
            Thanks, hope you like it!
          </Alert>
        </Grow>
      </div>
    </div>
  )
}
