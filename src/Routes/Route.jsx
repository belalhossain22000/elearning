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
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute> <Main /></PrivetRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },

      {
        path: '/update-profile',
        element: <UpdateProfile />
      }
    ]
  },
  {
    path: '/first-page',
    element: <FirstPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Register />
  },
  {
    path: '/sign-up-details',
    element: <LoginSuccess />
  },

]);
