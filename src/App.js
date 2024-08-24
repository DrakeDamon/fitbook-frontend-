import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import LogWorkout from "./LogWorkout";
import Goals from "./Goals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dashboard />);
function App() {
  return (
    <div className="App">
      <Dashboard />
      <LogWorkout />
      <Goals />
    </div>
  );
}

export default App;
