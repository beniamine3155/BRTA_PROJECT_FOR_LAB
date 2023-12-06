import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Signup/Signup";
import GetLicense from "../Pages/GetLicense/GetLicense";
import PrivateRoute from "./PrivateRoute";
import Applicants from "../Pages/Applicants/Applicants";
import Dashboard from "../Pages/Dashboard/Dashboard";
import LicenseDetails from "../Pages/LicenseDetails/LicenseDetails";
import Test from "../Pages/Test/Test";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        },
        {
          path: "/test",
          element: <Test></Test>
        },
        {
          path: "/get-license",
          element: <PrivateRoute><GetLicense></GetLicense></PrivateRoute>
        },
        {
          path: "/applicants",
          element: <PrivateRoute><Applicants></Applicants></PrivateRoute>
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: "/license/:id",
          element: <PrivateRoute><LicenseDetails></LicenseDetails></PrivateRoute>,
        },
      ]
    },
  ]);