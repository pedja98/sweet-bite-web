import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Home from '../components/user/home/Home'
import User from '../components/user/User'
import Details from '../components/user/details/Details'
import ChangePassword from '../components/user/changePassword/ChangePassword'

const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  {
    path: '/user',
    element: <User />,
    children: [
      { path: '', element: <Home /> },
      { path: 'details', element: <Details /> },
      { path: 'change-password', element: <ChangePassword /> },
    ],
  },
])

export default router
