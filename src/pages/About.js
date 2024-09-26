import React from 'react';
import { NavLink, useOutletContext } from "react-router-dom";
import Sidebar from '../Components/Sidebar';

function About() {
  const { links } = useOutletContext(); 

  return (
    <div>
      <h2>About Fitbook</h2>
      <p>This app helps you log and track your workouts effectively!</p>
    </div>
  );
}

export default About;
