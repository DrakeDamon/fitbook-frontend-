import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import Container from "../Components/Container";
import Searchbar from "../Components/Searchbar";

function Dashboard() {
  const { links, workouts,setSearch, handleDelete } = useOutletContext(); 

  return (

      <div className="main-content">
        <Searchbar setSearch={setSearch} />
        <div className="container">
          <Container workouts={workouts} handleDelete={handleDelete} />
        </div>
      </div>
  );
}

export default Dashboard;
