import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import FirstPage from "../pages/FirstPage/FirstPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginSuccess from "../components/RegistrationSuccess/LoginSuccess";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/profile',
            element:<Profile/>
        }
      ]
    },
    {
        path:'/first-page',
        element:<FirstPage/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/sign-up',
        element:<Register/>
    },
    {
        path:'/sign-up-details',
        element:<LoginSuccess/>
    }
  ]);
  