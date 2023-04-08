import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch ('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:isbn13',
        element: <BookDetails></BookDetails>,
      loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.isbn13}`)

      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
