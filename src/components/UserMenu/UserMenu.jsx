import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        <button
          onClick={() => {
            dispatch(logoutThunk());
          }}
        >
          Exit
        </button>
      </li>
    </div>
  );
};

export default UserMenu;
