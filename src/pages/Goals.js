import React from 'react';
import GoalButton from '../Components/GoalsButton';
import GoalList from '../Components/GoalList';
import DatePicker from '../Components/DatePicker';
import Sidebar from '../Components/Sidebar';
import { NavLink } from "react-router-dom";
function Goals() {

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'Goals', path: '/goals' },
    { name: 'Settings', path: '/settings' },
  ];
  return (
    <div className='dashboard-two'>
      <div class='sidebar'>
      <img src="src/fitbook.PNG" alt="Fitbook Logo" className="logo" />
      <NavLink >
      <Sidebar links={links}/>
      </NavLink>
      </div>
    <div className="goals-page">
      <h2>Select Your Goal</h2>
      {/* Static goal buttons */}
      <div className="goal-buttons">
        <GoalButton goal="Lose Weight" />
        <GoalButton goal="Gain Weight" />
        <GoalButton goal="Maintain" />
        <GoalButton goal="Bulk" />
        <GoalButton goal="Lean Out" />
      </div>
      </div>
      <div className='sidebar-right'>
      {/* Static date picker */}
      <DatePicker />

      {/* Static goal list */}
      <GoalList />
      </div>
    </div>
  );
}

export default Goals;
