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
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminPrivetRoute from "./PrivetRoute/AdminPrivetRoute";
import AddClass from "../components/AddRemoveClass/AddClass";
import StudentDetails from "../pages/StudentDetails/StudentDetails";
import ClassDetails from "../pages/Home/ClassDetails";

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
        path: '/profile/:email',
        element: <StudentDetails />
      },

      {
        path: '/update-profile',
        element: <UpdateProfile />
      },
      {
        path: '/add-class-link',
        element: <AddClass />
      },
      {
        path: '/course-details/:id',
        element: <ClassDetails />
      },
      {
        path: '/dashboard',
        element: <AdminPrivetRoute> <Dashboard /> </AdminPrivetRoute>
      },
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
