import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import router from './Router/Router'
import sweetBiteTheme from './theme/sweetBiteTheme'
import { CssBaseline } from '@mui/material'
import { BackGroundDiv } from './styles/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BackGroundDiv>
      <ThemeProvider theme={sweetBiteTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </BackGroundDiv>
  </React.StrictMode>,
)
