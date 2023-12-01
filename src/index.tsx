import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/attractions",
        element: <Attractions />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

