import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'

const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
])

export default router
