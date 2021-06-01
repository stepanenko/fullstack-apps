import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const styles = require("./Nav.module.css");

function Nav() {
  return (
    <nav>
      <ul className={styles.menuList}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/countries">Countries</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
      </ul>
    </nav>
  );
}

export default Nav;
