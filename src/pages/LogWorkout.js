import React, { useState} from "react";
import Searchbar from "../Components/Searchbar";
import Sidebar from "../Components/Sidebar";
import { NavLink, useOutletContext  } from "react-router-dom";
import LogWorkoutForm from "../Components/Form";

function LogWorkout() {
 const {links, workouts, setWorkouts } = useOutletContext();


  // State management for form inputs
  const [logWorkout, setLogWorkout] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  // Individual functions to handle input changes
  const handleWorkoutChange = (e) => {
    setLogWorkout(e.target.value);
    console.log("Workout Name:", e.target.value); // Log the updated value
  };
    const handleDateChange = (e) => setDate(e.target.value);

  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleNotesChange = (e) => {setNotes(e.target.value);
  console.log("notes:", e.target.value);
  }; 


  const handleSubmit = (e) => {
    e.preventDefault()
    const newWorkout={ date, type: logWorkout, duration, notes };
    setWorkouts([...workouts, newWorkout])
    setLogWorkout('');
    setDate('');
    setDuration('');
    setNotes('');
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <img src="/Users/daviddamon/Desktop/Fitbook.react/fitbook-frontend-/public/fitbook.PNG" alt="Fitbook Logo" className="logo" />
        <NavLink>
          <Sidebar links={links} />
        </NavLink>
      </div>
      <div className="main-content">
        <Searchbar />
        <div className="container">
          <LogWorkoutForm 
            workouts={workouts}
            setWorkouts={setWorkouts}
            logWorkout={logWorkout}
            setLogWorkout={handleWorkoutChange}
            date={date}
            setDate={handleDateChange}
            duration={duration}
            setDuration={handleDurationChange}
            notes={notes}
            setNotes={handleNotesChange}
            onFormSubmit={handleSubmit}

          />
        </div>
      </div>
      <div className='sidebar-right'>
      
      </div>
    </div>
  );
}

export default LogWorkout;
