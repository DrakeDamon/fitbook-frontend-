import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  // State management for the shared data
  const [sharedData, setSharedData] = useState("Shared Information");
  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'Goals', path: '/goals' },
    { name: 'Settings', path: '/settings' },
  ];
  return (
    <div>
      <Outlet context={{links,sharedData, setSharedData }} />
    </div>
  );
}

export default App;
