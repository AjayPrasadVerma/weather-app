import {NavLink} from 'react-router-dom'
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Weather App</div>
      <nav>
        <ul>
          <li>
            <NavLink to="" className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
