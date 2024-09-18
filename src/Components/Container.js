import React from 'react';
import Box from './Box';

function Container({workouts, handleDelete}) {
  return (
    <div className="cards-container">
      {workouts.map((workout) => (
        <Box
          key={workout.id}
          id={workout.id}
          name={workout.name}
          type={workout.type}
          duration={`${workout.duration} minutes`}
          date={workout.date}
          calories={workout.calories}
          handleDelete={handleDelete}
        />
      ))}     
    </div>
  );
}

export default Container;
