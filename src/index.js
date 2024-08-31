import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Goals from './pages/Goals';
import Nopage from './pages/Nopage';
import Settings from './pages/Settings';
import FoodForm from './pages/FoodForm';
import '../src/index.css'

const links = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Log Workout', path: '/log-workout' },
  { name: 'Goals', path: '/goals' },
  { name: 'Settings', path: '/settings' },
];

// Define your router here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard links={links} />,
    errorElement: <Nopage />,
  },
  {
    path: "dashboard",
    element: <Dashboard links={links} />,
  },
  {
    path: "log-workout",
    element: <LogWorkout />,
  },
  {
    path: "goals",
    element: <Goals />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <Nopage />,
  },
  {
    path: "foodform",
    element: <FoodForm />,
  },
]);

// Render the RouterProvider directly
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
