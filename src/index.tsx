import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, NextUIProvider } from '@nextui-org/react'

const theme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: 'Montserrat, sans-serif',
    },
    colors: {
      // brand colors
      primaryLight: '$green200',
      primary: '#4ADE7B',
      primaryDark: '$green600',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
)
reportWebVitals()
