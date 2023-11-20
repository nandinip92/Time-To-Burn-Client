import { NavLink } from "react-router-dom";

export const Nav = () => (
  <>
    <nav className="bg-nav-bar-color py-5 px-3">
      <ul className="flex flex-wrap justify-around items-center font-Noto text-nav-text-color">
        <li className="hover:bg-nav-text-color">
          <NavLink to="/" className="hover:text-nav-bar-color">
            Home
          </NavLink>
        </li>
        <li className="hover:bg-nav-text-color">
          <NavLink to="/time2burn" className="hover:text-nav-bar-color">
            TimeToBurn
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);
