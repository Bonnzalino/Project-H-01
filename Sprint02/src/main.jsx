import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import Error from './Error'
import Login from './Login';
import DashBoard from './DashBoard';
import AddActivity from './AddActivity';
// import EditActivity from './EditActivity';
// import EditProfile from './EditProfile';
import RegisterComplete from './RegisterComplete';
import RegisterForm from './RegisterForm';
import Layout from './Navbar/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <DashBoard />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
