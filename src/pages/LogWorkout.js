import React from "react";
import { Form } from "react-router-dom";
import Searchbar  from "../Components/Searchbar";
import Sidebar from "../Components/Sidebar";
import { NavLink } from "react-router-dom";
import LogWorkoutForm from "../Components/Form";
function LogWorkout () {

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'Goals', path: '/goals' },
    { name: 'Settings', path: '/settings' },
  ];
  return (
    <div class="dashboard">
      <div class='sidebar'>
      <img src="/Users/daviddamon/Desktop/Fitbook.react/fitbook-frontend-/public/fitbook.PNG" alt="Fitbook Logo" className="logo" />
      <NavLink >
      <Sidebar links={links}/>
      </NavLink>
      </div>
      <div className="main-content">
        <Searchbar />
      <div class="container">
      <form>
        <LogWorkoutForm />
      </form>
      </div>
      </div>
    </div>
  );
}

export default LogWorkout;