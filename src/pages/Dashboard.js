import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import Searchbar from "../Components/Searchbar";
function Dashboard({links}) {
  return (
    <div class="dashboard" >
      <div class='sidebar'>
      <img src="src/fitbook.PNG" alt="Fitbook Logo" className="logo" />
      <NavLink >
      <Sidebar links={links}/>
      </NavLink>
      </div>
      <div className="main-content">
        <Searchbar />
      <div class="container">
      <Container />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;

