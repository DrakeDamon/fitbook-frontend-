import React, { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import LogWorkoutForm from "../Components/Form";

function LogWorkout() {
  const { links, addWorkout } = useOutletContext(); 
  const [logWorkout, setLogWorkout] = useState('');
  const [type, setType] = useState(''); 
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleWorkoutChange = (e) => {
    setLogWorkout(e.target.value);
    console.log("Workout Name:", e.target.value);
  };

  const handleTypeChange = (e) => setType(e.target.value); 
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleCaloriesChange = (e) => setCalories(e.target.value); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = { name: logWorkout, type, duration, calories };

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
      addWorkout(data); 
    })
    .catch(error => console.error('Error adding workout:', error));

    setLogWorkout('');
    setType('');
    setDuration('');
    setCalories('');
  };
  return (

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
  );
}

export default LogWorkout;
