import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div className={classes.logo}>React</div>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
