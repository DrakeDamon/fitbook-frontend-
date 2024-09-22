import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [sharedData, setSharedData] = useState("Shared Information");
  const [workouts, setWorkouts] = useState([])
  const [search, setSearch]=useState('')

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'About', path: '/about' },

    ];

  useEffect(() => {
    fetch('http://localhost:5001/workouts')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setWorkouts(data); 
      })
      .catch((error) => console.error('Error fetching data:', error)); 
  }, []);

  const displayedWorkouts = workouts.filter((workout) =>
  workout.name.toLowerCase().includes(search.toLowerCase())
);

const addWorkout = (newWorkout) => {
  setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
};

const handleDelete = (id) => {
  setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id));
};
  
  return (
    <div>
      <Outlet context={{links, workouts: displayedWorkouts, setWorkouts, sharedData, setSharedData, setSearch, search, addWorkout, handleDelete }} />
    </div>
  );
}

export default App;
