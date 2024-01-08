import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Home from '../components/home/home'

const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/home', element: <Home /> },
])

export default router
