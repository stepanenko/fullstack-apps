import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const style = require("./Nav.module.css");

function Nav() {
  return (
    <nav>
      <ul className={style.menuList}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/countries">Countries</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cars">Cars</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
      </ul>
    </nav>
  );
}

export default Nav;
