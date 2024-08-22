import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.buttonDiv}>
      <button
        className={s.button}
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
