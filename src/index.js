import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
import Soda from './soda';
import Chips from './chips';
import Sardines from './sardines';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/soda",
    element: <Soda />,
  },
  {
    path: "/chips",
    element: <Chips />,
  },
  {
    path: "/sardines",
    element: <Sardines />
  }
]);
export default router;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}  />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
