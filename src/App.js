import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import JobHistory from './components/JobHistory'
import Footer from './components/Footer'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins']
  },
  palette: {
    primary: {
      main: '#1a213a'
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <Header />
        <Skills />
        <JobHistory />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
