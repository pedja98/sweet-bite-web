import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { FontColor, PrimaryThemeColor, SecondaryThemeColor } from '../constants/common'
import { MenuItem, Select, TextField } from '@mui/material'

export const StyledBackgroundContainer = styled('div')(() => ({
  backgroundColor: PrimaryThemeColor,
  minWidth: '100vw',
  minHeight: '100vh',
  color: FontColor,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const Root = styled('div')(() => ({
  width: '100%',
  textAlign: 'center',
}))

export const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: SecondaryThemeColor,
  fontWeight: 'bold',
  marginLeft: '2%',
}))

export const SelectStyled = styled(Select)(({ theme }) => ({
  color: FontColor,
  fontWeight: 'bold',
  borderColor: theme.palette.primary.main,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiSelect-select': {
    padding: 0,
  },
}))


export const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  color: FontColor,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.secondary.light,
  },
}))

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  color: FontColor,
  borderColor: theme.palette.primary.main,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    borderColor: theme.palette.primary.main,
  },
}))
