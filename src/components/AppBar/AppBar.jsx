import s from "./AppBar.module.css";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNav/AuthNav";

const AppBar = () => {
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div className={s.div}>
      <h2>{user.email}</h2>
      <h3>{user.name}</h3>
      <ul>
        <Navigation />
        {!loggedIn && <AuthNavigation />}
        {loggedIn && <UserMenu />}
      </ul>
    </div>
  );
};

export default AppBar;
