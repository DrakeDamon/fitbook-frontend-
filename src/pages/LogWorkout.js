import React, { useState } from "react";
import Searchbar from "../Components/Searchbar";
import Sidebar from "../Components/Sidebar";
import { NavLink, useOutletContext } from "react-router-dom";
import LogWorkoutForm from "../Components/Form";

function LogWorkout() {
  const { links, workouts, addWorkout } = useOutletContext(); // Destructure addWorkout from context

  // State management for form inputs
  const [logWorkout, setLogWorkout] = useState('');
  const [type, setType] = useState(''); 
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  // Individual functions to handle input changes
  const handleWorkoutChange = (e) => {
    setLogWorkout(e.target.value);
    console.log("Workout Name:", e.target.value);
  };

  const handleTypeChange = (e) => setType(e.target.value); 
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleCaloriesChange = (e) => setCalories(e.target.value); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new workout object
    const newWorkout = { name: logWorkout, type, duration, calories };

    // POST request to add a new workout
    fetch('http://localhost:5001/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWorkout)
    })
    .then(response => response.json())
    .then(data => {
      console.log('New workout added:', data);
      addWorkout(data); // Use the response data to add the workout to state
    })
    .catch(error => console.error('Error adding workout:', error));

    // Reset the form fields
    setLogWorkout('');
    setType('');
    setDuration('');
    setCalories('');
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <img src="/Users/daviddamon/Desktop/Fitbook.react/fitbook-frontend-/public/fitbook.PNG" alt="Fitbook Logo" className="logo" />
        <NavLink>
          <Sidebar links={links} />
        </NavLink>
      </div>
      <div className="main-content">
        <div className="container">
          <LogWorkoutForm 
            logWorkout={logWorkout}
            setLogWorkout={handleWorkoutChange}
            type={type}
            setType={handleTypeChange}
            duration={duration}
            setDuration={handleDurationChange}
            calories={calories}
            setCalories={handleCaloriesChange}
            onFormSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default LogWorkout;
