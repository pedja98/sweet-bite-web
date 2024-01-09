import { useNavigate } from 'react-router-dom'
import {
  NavBarLinkStyled,
  NavigationLinksContainerStyled,
  NavigationStyled,
  SignOutButtonStyle,
} from '../../../styles/navBar'
import { useAppDispatch } from '../../../app/hooks'
import { signOut } from '../../../features/auth/auth.slice'
import { UserTypeKupac } from '../../../constants/user'

const NavBar = ({ userType }: { userType: string }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
  }
  console.log(userType)
  return (
    <NavigationStyled>
      {userType === UserTypeKupac ? (
        <NavigationLinksContainerStyled>
          <NavBarLinkStyled to='/user'>Početna</NavBarLinkStyled>
          <NavBarLinkStyled to='/user'>Moje narudžbine</NavBarLinkStyled>
          <NavBarLinkStyled to='/user'>Obaveštenja</NavBarLinkStyled>
          <NavBarLinkStyled to='/user'>Korpa</NavBarLinkStyled>
          <NavBarLinkStyled to='/user/details'>Detalji korisika</NavBarLinkStyled>
          <NavBarLinkStyled to='/user/change-password'>Promena lozinke</NavBarLinkStyled>
        </NavigationLinksContainerStyled>
      ) : (
        <NavigationLinksContainerStyled>
          <NavBarLinkStyled to='/user'>Početna</NavBarLinkStyled>
          <NavBarLinkStyled to='/user'>Narudžbine</NavBarLinkStyled>
          <NavBarLinkStyled to='/user'>Dodaj proizvod</NavBarLinkStyled>
          <NavBarLinkStyled to='/user/details'>Detalji korisika</NavBarLinkStyled>
          <NavBarLinkStyled to='/user/change-password'>Promena lozinke</NavBarLinkStyled>
        </NavigationLinksContainerStyled>
      )}
      <SignOutButtonStyle onClick={handleSignOut}>Odjavi se</SignOutButtonStyle>
    </NavigationStyled>
  )
}

export default NavBar
