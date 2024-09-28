
import React from "react";
import { NavLink } from 'react-router-dom';
function Sidebar()  {
  
  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Log Workout', path: '/log-workout' },
    { name: 'About', path: '/about' },
  ];
  
  return (
 <nav class="sidebar">
   <ul>
     {links.map((link) => (
       <li key={link.name}>
         <NavLink to={link.path}>{link.name}</NavLink>
       </li>
     ))}
   </ul>
 </nav>
  );
}

export default Sidebar;