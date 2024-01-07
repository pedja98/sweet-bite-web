import { createTheme } from '@mui/material/styles'

export const PRIMARY_COLOR = '#46A087'
export const SECONDARY_COLOR = '#6FC1AA'
export const FONT_COLOR = '#337B68'

export default createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: '"Kalam", cursive',
    fontSize: 44,
    h1: {
      fontFamily: '"Kalam", cursive',
      fontSize: '6rem !important',
    },
    h2: {
      fontFamily: '"Kalam", cursive',
      fontSize: '3.75rem !important',
    },
    h3: {
      fontFamily: '"Kalam", cursive',
      fontSize: '3.75rem !important',
    },
    h4: {
      fontFamily: '"Kalam", cursive',
      fontSize: '2.125rem !important',
    },
    h5: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1.5rem !important',
    },
    h6: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1.25rem !important',
    },
    subtitle1: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1rem !important',
    },
    subtitle2: {
      fontFamily: '"Kalam", cursive',
      fontSize: '0.875rem !important',
    },
    body1: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1rem !important',
    },
    body2: {
      fontFamily: '"Kalam", cursive',
      fontSize: '0.875rem !important',
    },
    caption: {
      fontFamily: '"Kalam", cursive',
      fontSize: '0.75rem !important',
    },
  },
})
