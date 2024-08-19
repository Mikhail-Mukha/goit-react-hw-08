import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.div}>
      <NavLink className={s.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={s.navlink} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
