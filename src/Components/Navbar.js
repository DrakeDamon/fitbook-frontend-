import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
