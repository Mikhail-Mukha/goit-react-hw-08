import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNavigation = () => {
  return (
    <>
      <li>
        <NavLink className={s.navlink} to="/register">
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to="/login">
          Login
        </NavLink>
      </li>
    </>
  );
};

export default AuthNavigation;
