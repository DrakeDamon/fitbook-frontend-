import React from 'react';
import { NavLink, useOutletContext } from "react-router-dom";
import Sidebar from '../Components/Sidebar';

function About() {
  const { links } = useOutletContext(); 

  return (
 <div className="dashboard">
    <div className="sidebar">
      <img src="src/fitbook.PNG" alt="Fitbook Logo" className="logo" />
      <NavLink />
      <Sidebar links={links} />

    </div>
    <div>
      <h2>About Fitbook</h2>
      <p>This app helps you log and track your workouts effectively!</p>
    </div>
    </div>
  );
}

export default About;
