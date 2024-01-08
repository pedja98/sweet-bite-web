import { createTheme } from '@mui/material/styles'
import {
  FontColor,
  PrimaryThemeColor,
  SecondaryThemeColor,
  SelectedItemColor,
  WhiteTeamColor,
} from '../constants/common'

export default createTheme({
  palette: {
    primary: {
      main: PrimaryThemeColor,
      dark: FontColor,
    },
    secondary: {
      main: SecondaryThemeColor,
      light: SelectedItemColor,
    },
  },
  typography: {
    fontFamily: '"Kalam", cursive',
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
      color: FontColor,
    },
    h5: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1.5rem !important',
      color: FontColor,
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
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          backgroundColor: PrimaryThemeColor,
          color: WhiteTeamColor,
        },
        contained: {
          boxShadow: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          '& label': {
            color: FontColor,
            fontWeight: 'bold',
            paddingLeft: '5%',
          },
          '& input': {
            color: FontColor,
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: FontColor,
          fontWeight: 'bold',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          '& label': {
            color: FontColor,
            fontWeight: 'bold',
          },
          '& select': {
            color: FontColor,
            fontWeight: 'bold',
          },
        },
      },
    },
  },
})
