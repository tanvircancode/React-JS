import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/about"
            activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/services"
            activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/posts/js/react"
            activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            JavaScript
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/login"
            activeStyle={{ fontWeight: 'bold', color: 'red' }}>
            Check Logged user
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
