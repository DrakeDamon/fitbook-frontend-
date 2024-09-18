import React from 'react';

function Box({ type, duration, date, calories, name }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{duration}</p>
      <p>{type}</p>
      <p>Calories: {calories}</p>
      <div>
      <button>Delete Workout</button>
      </div>
    </div>
  );
}

export default Box;
