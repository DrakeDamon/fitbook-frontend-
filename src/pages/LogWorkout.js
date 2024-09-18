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
    const newWorkout = { id: Date.now(), name: logWorkout, type, duration, calories }; // Ensure unique ID
    addWorkout(newWorkout); 
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
