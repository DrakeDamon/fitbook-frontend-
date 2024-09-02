import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  // State management for the shared data
  const [sharedData, setSharedData] = useState("Shared Information");
  const [workouts, setWorkouts] = useState("")
  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'Goals', path: '/goals' },
    { name: 'Settings', path: '/settings' },
  ];

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/workouts.json?key=21b7ed20')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setWorkouts(data); 
      })
      .catch((error) => console.error('Error fetching data:', error)); 
  }, []);
  
  return (
    <div>
      <Outlet context={{links,workouts,setWorkouts, sharedData, setSharedData }} />
    </div>
  );
}

export default App;
