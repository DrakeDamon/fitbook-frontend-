import React from 'react';

function GoalList() {
  return (
    <div className="goal-list">
      <h3>Your Goals</h3>
      {/* Static goals for now */}
      <div className="goal-item">
        <span>Lose Weight</span>
        <button>Remove</button>
      </div>
      <div className="goal-item">
        <span>Gain Weight</span>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default GoalList;
