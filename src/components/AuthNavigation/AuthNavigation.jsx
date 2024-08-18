import { NavLink } from "react-router-dom";
const AuthNavigation = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default AuthNavigation;
