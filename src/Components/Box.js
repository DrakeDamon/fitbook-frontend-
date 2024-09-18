import React from 'react';

function Box({id, type, duration, date, calories, name, handleDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{duration}</p>
      <p>{type}</p>
      <p>Calories: {calories}</p>
      <div>
      <button onClick={() => handleDelete(id)}>Delete Workout</button>
      </div>
    </div>
  );
}

export default Box;
