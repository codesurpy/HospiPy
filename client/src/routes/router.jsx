import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Login from '../pages/Login'
import { Layout } from '../layout/Layout'
import Dashboard from '../components/Dashboard/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/dashboard' element={<Dashboard />} />,
    <Route path='/' element={<Login />} />,
    <Route path='/main' element={<Layout />}>
      {/*Aqui deben ir los hijos de layout*/}
    </Route>
  ])
)

export default router
