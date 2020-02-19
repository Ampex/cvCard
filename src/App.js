import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css'
import Cookies from './components/Cookies'
import Bar from './components/Bar'
import Header from './components/Header'
import Skills from './components/Skills'
import JobHistory from './components/JobHistory'
import Footer from './components/Footer'

import Fade from '@material-ui/core/Fade'

const globalColor = '#1a213a'
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        color: globalColor
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: globalColor,
        fontSize: 14
      },
      arrow: {
        color: globalColor
      }
    }
  },
  typography: {
    fontFamily: ['Poppins']
  },
  palette: {
    primary: {
      main: globalColor
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fade in={true} timeout={1200}>
        <div className='container'>
          <Cookies />
          <Bar />
          <Header />
          <Skills />
          <JobHistory />
          <Footer />
        </div>
      </Fade>
    </ThemeProvider>
  )
}

export default App
