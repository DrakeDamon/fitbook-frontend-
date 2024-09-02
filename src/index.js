import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import App from './App';
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Goals from './pages/Goals';
import Nopage from './pages/Nopage';
import Settings from './pages/Settings';
import FoodForm from './pages/FoodForm';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Use App as the root component
    errorElement: <Nopage />,
    children: [
      { index: true, element: <Dashboard /> }, // Set Dashboard as the default route
      { path: "dashboard", element: <Dashboard /> },
      { path: "log-workout", element: <LogWorkout /> },
      { path: "goals", element: <Goals /> },
      { path: "settings", element: <Settings /> },
      { path: "foodform", element: <FoodForm /> },
      { path: "*", element: <Nopage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
