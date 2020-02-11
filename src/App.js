import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css'
import Bar from './components/Bar'
import Header from './components/Header'
import Skills from './components/Skills'
import JobHistory from './components/JobHistory'
import Footer from './components/Footer'

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
      <div className='container'>
        <Bar />
        <Header />
        <Skills />
        <JobHistory />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
