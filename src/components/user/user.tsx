import { Outlet } from 'react-router-dom'
import Header from '../common/header/Header'
import NavBar from '../common/navBar/NavBar'
import { useAppSelector } from '../../app/hooks'
import { selectAuthKey } from '../../features/auth/auth.selectors'
import Footer from '../common/footer/footer'

const User = () => {
  const currentUserType = useAppSelector(selectAuthKey('type'))
  return (
    <div>
      <Header />
      <NavBar userType={currentUserType} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default User
