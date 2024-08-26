import React from 'react';
import Box from './Box';

function Container() {
  return (
    <div className="cards-container">
      <Box title="Daily Steps" content="11,256 Steps" date="30 March, 2023" />
      <Box title="Active Calories" content="16,524 kcal" date="20 March - 02 April, 2023" />
      <Box title="Sleep" content="9 Hours 50 Minutes" date="26 March, 2023" />
      <Box title="Weight" content="59.0 KG" date="21 March, 2023" />
    </div>
  );
}

export default Container;
