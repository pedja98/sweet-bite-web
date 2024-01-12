import { useNavigate } from 'react-router-dom'
import {
  NavBarLinkStyled,
  NavigationLinksContainerStyled,
  NavigationStyled,
  SignOutButtonStyle,
} from '../../../styles/navBar'
import { useAppDispatch } from '../../../app/hooks'
import { signOut } from '../../../features/auth/auth.slice'
import { UserTypeBuyer } from '../../../constants/user'

const NavBar = ({ userType }: { userType: string }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
  }
  return (
    <NavigationStyled>
      {userType === UserTypeBuyer ? (
        <NavigationLinksContainerStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/home'
          >
            Početna
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/my-orders'
          >
            Moje narudžbine
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/notifications'
          >
            Obaveštenja
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/basket'
          >
            Korpa
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/details'
          >
            Detalji korisika
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/change-password'
          >
            Promena lozinke
          </NavBarLinkStyled>
        </NavigationLinksContainerStyled>
      ) : (
        <NavigationLinksContainerStyled>
          <NavBarLinkStyled
            to='/user/home'
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
          >
            Početna
          </NavBarLinkStyled>
          <NavBarLinkStyled
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
            to='/user/orders'
          >
            Narudžbine
          </NavBarLinkStyled>
          <NavBarLinkStyled
            to='/user/add-product'
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
          >
            Dodaj proizvod
          </NavBarLinkStyled>
          <NavBarLinkStyled
            to='/user/details'
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
          >
            Detalji korisika
          </NavBarLinkStyled>
          <NavBarLinkStyled
            to='/user/change-password'
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? '2px solid' : '',
              }
            }}
          >
            Promena lozinke
          </NavBarLinkStyled>
        </NavigationLinksContainerStyled>
      )}
      <SignOutButtonStyle onClick={handleSignOut}>Odjavi se</SignOutButtonStyle>
    </NavigationStyled>
  )
}

export default NavBar
