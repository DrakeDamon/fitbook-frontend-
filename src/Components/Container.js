import React from 'react';
import Box from './Box';

function Container({workouts}) {
  return (
    <div className="cards-container">
      {workouts.map((workout) => (
        <Box
          key={workout.id}
          name={workout.name}
          type={workout.type}
          duration={`${workout.duration} minutes`}
          date={workout.date}
          calories={workout.calories}
        />
      ))}     
    </div>
  );
}

export default Container;
