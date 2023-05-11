import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './Error'
import AddActivity from './AddActivity';
import EditActivity from './EditActivity';
import EditProfile from './EditProfile';
import RegisterComplete from './RegisterComplete';
import RegisterForm from './RegisterForm';
import Layout from './Navbar/Layout';
import Dashboard from './DashBoard';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Dashboard />,  //Should be landing page
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element:  <Login />,
    errorElement: <Error />,
  },
  {
    path: "/AddActivity",
    element:  <AddActivity />,
    errorElement: <Error />,
  },
  {
    path: "/RegisterComplete",
    element:  <RegisterComplete />,
    errorElement: <Error />,
  },
  {
    path: "/RegisterForm",
    element:  <RegisterForm />,
    errorElement: <Error />,
  },
  {
    path: "/EditActivity",
    element:  <EditActivity />,
    errorElement: <Error />,
  },
  {
    path: "/EditProfile",
    element:  <EditProfile />,
    errorElement: <Error />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
