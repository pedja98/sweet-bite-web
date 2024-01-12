import { createTheme } from '@mui/material/styles'
import {
  TernaryColor,
  PrimaryThemeColor,
  SecondaryThemeColor,
  SelectedItemColor,
  WhiteTeamColor,
} from '../constants/common'

export default createTheme({
  palette: {
    primary: {
      main: PrimaryThemeColor,
      dark: TernaryColor,
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
      color: TernaryColor,
    },
    h5: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1.5rem !important',
      color: TernaryColor,
    },
    h6: {
      fontFamily: '"Kalam", cursive',
      fontSize: '1.25rem !important',
      color: TernaryColor,
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
      color: TernaryColor,
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
            color: TernaryColor,
            fontWeight: 'bold',
            paddingLeft: '5%',
          },
          '& input': {
            color: TernaryColor,
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: TernaryColor,
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
            color: TernaryColor,
            fontWeight: 'bold',
          },
          '& select': {
            color: TernaryColor,
            fontWeight: 'bold',
          },
        },
      },
    },
  },
})
