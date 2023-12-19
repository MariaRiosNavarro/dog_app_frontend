import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="px-4" to="/">
          Home
        </NavLink>
        <NavLink className="px-4" to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="px-4" to="/add">
          AddDog
        </NavLink>
        <NavLink className="px-4" to="/search">
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
