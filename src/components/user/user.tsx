import { Outlet } from 'react-router-dom'
import Header from '../common/header/header'

const User = () => {
  const auth = JSON.parse(String(localStorage.getItem('auth')))
  console.log(auth)
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default User
