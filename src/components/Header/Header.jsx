import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={s.div}>
      <h2>{user.email}</h2>
      <h3>{user.name}</h3>
      <ul>
        <li>
          <NavLink className={s.navlink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.navlink} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {!loggedIn && (
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
        )}
        {loggedIn && (
          <li>
            <button
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              Exit
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
