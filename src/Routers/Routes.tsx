import { useRoutes } from 'react-router-dom'
import ProductsList from '../pages/ProductsList/ProductsList'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import RegisterLayout from '../layouts/RegisterLayout/RegisterLayout'
export default function Routes() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: <ProductsList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routerElements
}
