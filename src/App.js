import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Goals from './pages/Goals';
import Nopage from './pages/Nopage';
import Settings from "./pages/Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dashboard />);
function App() {

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'Goals', path: '/goals' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route index element={<Dashboard links={links}/>} />    
      <Route path="/dashboard" element={<Dashboard links={links}/>} /> 
     <Route path="/log-workout" element={<LogWorkout/>} /> 
     <Route path="/goals" element={<Goals/>} />
     <Route path="/settings" element={<Settings/>} />
     <Route path="*" element={<Nopage/>} />

     </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;