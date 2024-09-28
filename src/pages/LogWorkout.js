import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function LogWorkout() {
  const { addWorkout } = useOutletContext(); 
  const [logWorkout, setLogWorkout] = useState('');
  const [type, setType] = useState(''); 
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  // Handlers for each input changes
  const handleWorkoutChange = (e) => setLogWorkout(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value); 
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleCaloriesChange = (e) => setCalories(e.target.value); 

  // Handle form submission
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

    // Reset the form fields
    setLogWorkout('');
    setType('');
    setDuration('');
    setCalories('');
  };

  return (
    <div className="main-content">
      <div className="container">
        <form className="log-workout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="workoutName">Workout Name</label>
            <input
              type="text"
              id="workoutName"
              value={logWorkout}
              onChange={handleWorkoutChange}
              placeholder="Enter workout name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={handleTypeChange}
              placeholder="Enter workout type (e.g., cardio, HIIT, weights)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={handleDurationChange}
              placeholder="Enter duration (e.g., 1 hour)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              id="calories"
              value={calories}
              onChange={handleCaloriesChange}
              placeholder="Enter calories burned"
            />
          </div>

          <button type="submit" className="submit-button">Log Workout</button>
        </form>
      </div>
    </div>
  );
}

export default LogWorkout;
