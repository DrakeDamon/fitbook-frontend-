import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import Searchbar from "../Components/Searchbar";

function Dashboard() {
  const { links, workouts } = useOutletContext(); 

  return (
    <div className="dashboard">
      <div className="sidebar">
        <img src="src/fitbook.PNG" alt="Fitbook Logo" className="logo" />
        <NavLink />
        <Sidebar links={links} />
      </div>
      <div className="main-content">
        <Searchbar />
        <div className="container">
          <Container workouts={workouts} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
