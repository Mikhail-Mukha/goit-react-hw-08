import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <li className={s.div}>
        <NavLink className={s.navlink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </>
  );
};

export default Navigation;
