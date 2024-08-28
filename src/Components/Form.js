import React from 'react';

function LogWorkoutForm() {
  return (
    <form className="log-workout-form">
      <div className="form-group">
        <label htmlFor="workoutName">Workout Name</label>
        <input
          type="text"
          id="workoutName"
          placeholder="Enter workout name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          placeholder="Enter duration (e.g., 1 hour)"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          placeholder="Enter any additional notes"
        />
      </div>

      <button type="submit" className="submit-button">Log Workout</button>
    </form>
  );
}

export default LogWorkoutForm;
