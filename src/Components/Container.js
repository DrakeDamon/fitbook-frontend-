import React from 'react';
import Box from './Box';

function Container({workouts}) {
  return (
    <div className="cards-container">
      {workouts.map((workout) => (
        <Box
          key={workout.id}
          title={workout.type}
          content={`${workout.duration} minutes`}
          date={workout.date}
        />
      ))}     
    </div>
  );
}

export default Container;
