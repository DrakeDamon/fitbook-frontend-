import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/Navbar'

function App() {
  const [sharedData, setSharedData] = useState("Shared Information");
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState('');

  

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
       <NavBar />

      <Outlet context={{ 
        workouts: displayedWorkouts, 
        setWorkouts, 
        sharedData, 
        setSharedData, 
        setSearch, 
        search, 
        addWorkout, 
        handleDelete
      }} />
    </div>
  );
}

export default App;
