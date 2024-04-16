
import { createBrowserRouter } from 'react-router-dom'
import MainlLayout from './MainLayout/MainlLayout'
import Signup from './Signup/Signup'
import Login from './LoginForm/Login'
import ForgotPass from './Forgotpass/ForgotPass'

const router= createBrowserRouter([
    {
        path: "/",
        element: <MainlLayout/>,
        children: [
            {
                path: "/Signup",
                element:<Signup/>
            },
            
            {
                path: "/login",
                element: <Login/>
            },

            {
                path: "/ForgotPass",
                element: <ForgotPass/>
            }
        ]
    }
])
export default router
