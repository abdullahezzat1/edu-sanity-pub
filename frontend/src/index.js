import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task1",
    element: <App route="task1" />,
  },
  {
    path: "/task2",
    element: <App route="task2" />,
  },
  {
    path: "/task3",
    element: <App route="task3" />,
  },
  {
    path: "/task4",
    element: <App route="task4" />,
  },
  {
    path: "/task5",
    element: <App route="task5" />,
  },
  {
    path: "/task6",
    element: <App route="task6" />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
