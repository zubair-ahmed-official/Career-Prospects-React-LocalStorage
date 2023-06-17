import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FeaturedDetails from './components/FeaturedDetails/FeaturedDetails';
import Applied from './components/Applied/Applied';
import AppliedLoader from './components/AppliedLoader/AppliedLoader';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>,
        loader: ()=> fetch('category.json')
      },
      {
        path:'job/:id',
        element: <FeaturedDetails></FeaturedDetails>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        errorElement: <ErrorPage />,
        loader: AppliedLoader
      },
      {
        path:'/statistics',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
