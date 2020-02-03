import React, { useState } from 'react'
import { Button, Typography, Switch } from '@material-ui/core'

export default function Footer() {
  const [isCheck, setCheck] = useState(true)
  return (
    <React.Fragment>
      <div>
        <Typography variant='h4'>Would you like to check my CV?</Typography>
        <Typography variant='inherit'>{`Just confirm that you are not a robot, and you are free to download ;)`}</Typography>
        <Switch onChange={() => setCheck(!isCheck)} value={isCheck} />
        <Button
          href={
            'https://drive.google.com/open?id=1S8eWwzAEpibdEhp45NilMf2ySCFoucd1'
          }
          target={'_blank'}
          style={{ marginTop: 25 }}
          variant='contained'
          color='primary'
          disabled={isCheck}
          size='large'
        >
          Download
        </Button>
      </div>
    </React.Fragment>
  )
}
