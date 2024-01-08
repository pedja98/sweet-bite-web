import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import router from './Router/Router'
import sweetBiteTheme from './theme/sweetBiteTheme'
import { CssBaseline } from '@mui/material'
import { StyledBackgroundContainer } from './styles/common'
import { persistor, store } from './app/store'
import { Provider } from 'react-redux'
import Notification from './components/notifications/Notification'
import { SnackbarProvider } from 'notistack'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledBackgroundContainer>
          <ThemeProvider theme={sweetBiteTheme}>
            <CssBaseline />
            <SnackbarProvider maxSnack={5} autoHideDuration={8000}>
              <Notification />
            </SnackbarProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </StyledBackgroundContainer>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
