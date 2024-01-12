import { Outlet } from 'react-router-dom'
import Header from '../common/header/Header'
import NavBar from '../common/navBar/NavBar'
import { useAppSelector } from '../../app/hooks'
import { selectAuthAttributeByKey } from '../../features/auth/auth.selectors'
import Footer from '../common/footer/Footer'

const User = () => {
  const currentUserType = useAppSelector(selectAuthAttributeByKey('type'))
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
