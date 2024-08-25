import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Goals from './pages/Goals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dashboard />);
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route index element= {<Dashboard/>} />
     <Route path="/dashboard" element={<Dashboard/>} /> 
     </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
