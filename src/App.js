import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Goals from './pages/Goals';
import Nopage from './pages/Nopage';
import Settings from "./pages/Settings";

const links = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Log Workout', path: '/log-workout' },
  { name: 'Goals', path: '/goals' },
  { name: 'Settings', path: '/settings' },
];

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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
