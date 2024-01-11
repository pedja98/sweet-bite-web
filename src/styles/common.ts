import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { TernaryColor, PrimaryThemeColor, SecondaryThemeColor, WhiteTeamColor } from '../constants/common'
import { Button, CardActions, CardContent, FormControl, MenuItem, Select, TextField } from '@mui/material'

export const StyledBackgroundContainer = styled('div')(() => ({
  backgroundColor: PrimaryThemeColor,
  minWidth: '100vw',
  minHeight: '100vh',
  color: TernaryColor,
}))

export const StyledCenterBackgroundContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
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
  color: TernaryColor,
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
  color: TernaryColor,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.secondary.light,
  },
}))

export const NameSurnameContainer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const WhiteRoot = styled('div')(() => ({
  width: '100%',
  textAlign: 'center',
  backgroundColor: WhiteTeamColor,
}))

export const FormTextFieldStyled = styled(TextField)(({ theme }) => ({
  color: TernaryColor,
  margin: '30',
  padding: '10',
  minWidth: 280,
  maxHeight: 92,
  borderColor: theme.palette.primary.main,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    borderColor: theme.palette.primary.main,
  },
}))

export const FormSmallTextFieldStyled = styled(TextField)(({ theme }) => ({
  color: TernaryColor,
  maxWidth: '48%',
  height: 40,
  marginTop: '30',
  paddingTop: '10',
  marginBottom: '30',
  paddingBottom: '10',
  borderColor: theme.palette.primary.main,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    borderColor: theme.palette.primary.main,
  },
}))

export const FormControlStyled = styled(FormControl)(() => ({
  margin: '30',
  padding: '10',
  minWidth: 280,
  maxHeight: 92,
}))

export const FormButtonStyled = styled(Button)(() => ({
  margin: '30',
  padding: '10',
  minWidth: 250,
  height: 35,
}))

export const FormSmallButtonStyled = styled(Button)(() => ({
  margin: '30',
  padding: '10',
  minWidth: 150,
  height: 35,
}))

export const FormCartContextStyled = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const FormCartActionStyled = styled(CardActions)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const RootRowFlexDirectionStyle = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: 15,
}))
