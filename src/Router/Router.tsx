import { createBrowserRouter } from 'react-router-dom'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Home from '../components/user/home/Home'
import User from '../components/user/User'
import Details from '../components/user/details/Details'
import ChangePassword from '../components/user/changePassword/ChangePassword'
import ProductDetails from '../components/user/productDetails/ProductDetails'
import Orders from '../components/user/orders/Orders'
import AddProduct from '../components/user/addProduct/AddProduct'
import Basket from '../components/user/basket/Basket'
import Notifications from '../components/user/notifications/Notification'
import OrderDetails from '../components/user/orderDetails/OrderDetails'

const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  {
    path: '/user',
    element: <User />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'details', element: <Details /> },
      { path: 'change-password', element: <ChangePassword /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'my-orders', element: <Orders /> },
      { path: 'orders', element: <Orders /> },
      { path: 'order/:id', element: <OrderDetails /> },
      { path: 'add-product', element: <AddProduct /> },
      { path: 'basket', element: <Basket /> },
      { path: 'notifications', element: <Notifications /> },
    ],
  },
])

export default router
