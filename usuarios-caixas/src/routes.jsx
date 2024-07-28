import{createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/App'
import ListerUsers from './pages/listerUsers'

const router = createBrowserRouter([
     {
        path: '/',
        element: <Home/>
     },
    {
        path: '/lista-de-usuarios',
        element: <ListerUsers/>
    }
])

export default router

