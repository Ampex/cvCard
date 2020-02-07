import React from 'react'
import WorkIcon from '@material-ui/icons/Work'
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@material-ui/core'

const jobs = [
  {
    title: 'Junior Frontend Developer',
    company: 'SteaMaster Prasowacze Parowe',
    description:
      'Writing JavaScript / ES6 / React based web applications. Active participation in creating web applications. Providing applications for verification of code quality control. Cooperation in the release of software for production environments.',
    from: 'November 2018'
  },
  {
    title: '3D Artist/FX Artist',
    company: 'Telewizja Polsat sp. z o.o.',
    description:
      'Performing 3D visualization for editorial purposes, cooperation with internal cells in the process of creating materials for emission (order management, quality management of delivered materials, media delivery through graphics order system, geographic maps for information services, design of virtual scenography). Preparation of graphics and animations for broadcast in programs, postproduction. Cooperation with department assembly, delivery of editorial orders.',
    from: 'December 2013'
  },
  {
    title: '3D Artist',
    company: 'Orenore',
    description:
      'Visualization of Vancouver city sectors, modeling, mapping and texturing infrastructure of the city, creating modular item assets for real time engine. Preparing LOD, and baking textures.',
    from: 'February 2012'
  },
  {
    title: '2D/3D Artist',
    company: 'M&P Studio',
    description:
      'Designing 3D graphics. Company visualization through rendering of 3D objects. Composition of 2D and 3D materials. 2D and 3D animation, preparation of advertising spots.',
    from: 'January 2011'
  }
]

const jobList = jobs.map((job, index) => (
  <div key={index}>
    <List>
      <ListItem button>
        <ListItemAvatar style={{ marginRight: 20 }}>
          <Avatar>
            <WorkIcon color='primary' />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography variant='h6'>{job.title}</Typography>
              <Typography variant='caption'>{job.from}</Typography>
              <Typography variant='body2'>{job.description}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  </div>
))

export default function JobHistory() {
  return (
    <div id='jobHistory'>
      <div>
        <Typography style={{ marginBottom: 15 }} variant='h4'>
          Job History
        </Typography>
        {jobList}
      </div>
    </div>
  )
}
