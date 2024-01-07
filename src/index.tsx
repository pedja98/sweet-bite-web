import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import router from './Router/Router'
import sweetBiteTheme from './theme/sweetBiteTheme'
import { CssBaseline } from '@mui/material'
import { StyledBackgroundContainer } from './styles/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StyledBackgroundContainer>
      <ThemeProvider theme={sweetBiteTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledBackgroundContainer>
  </React.StrictMode>,
)
