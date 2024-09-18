import React from 'react';

function LogWorkoutForm({ logWorkout, setLogWorkout, type, setType, duration, setDuration, calories, setCalories, onFormSubmit }) {

  return (
    <form className="log-workout-form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="workoutName">Workout Name</label>
        <input
          type="text"
          id="workoutName"
          value={logWorkout}
          onChange={setLogWorkout}
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
          onChange={setType}
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
          onChange={setDuration}
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
          onChange={setCalories}
          placeholder="Enter calories burned"
        />
      </div>

      <button type="submit" className="submit-button">Log Workout</button>
    </form>
  );
}

export default LogWorkoutForm;
