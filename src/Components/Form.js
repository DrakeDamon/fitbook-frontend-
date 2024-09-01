import React from 'react';

function LogWorkoutForm({ logWorkout, setLogWorkout, date, setDate, duration, setDuration, notes, setNotes }) {

  return (
    <form className="log-workout-form">
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
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={setDate}
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
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={setNotes}
          placeholder="Enter any additional notes"
        />
      </div>

      <button type="submit" className="submit-button">Log Workout</button>
    </form>
  );
}

export default LogWorkoutForm;
