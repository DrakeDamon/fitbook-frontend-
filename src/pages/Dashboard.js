import React from "react";
import { NavLink, useOutletContext } from "react-router-dom"; // Import NavLink
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import Searchbar from "../Components/Searchbar";

function Dashboard() {
  const { links } = useOutletContext(); // Use links from context; remove unused variables

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
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
