import styled from 'styled-components'
import { TernaryColor, WhiteTeamColor } from '../constants/common'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

export const NavBarLinkStyled = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: WhiteTeamColor,
  fontWeight: 'bold',
  marginLeft: '1%',
  '&:hover': {
    borderBottom: '2px solid',
  },
}))

export const NavigationStyled = styled('div')(() => ({
  marginTop: '1%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const NavigationLinksContainerStyled = styled('div')(() => ({
  flexGrow: 1,
  textAlign: 'center',
  marginLeft: '10%',
}))

export const SignOutButtonStyle = styled(Button)(() => ({
  '&.MuiButton-contained': {
    backgroundColor: TernaryColor,
    float: 'right',
    height: 30,
    fontSize: '16px',
    textAlign: 'right',
    marginRight: '2%',
  },
}))
