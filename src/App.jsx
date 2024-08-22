import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeThunk } from "./redux/auth/operations";
import { PrivateRoure } from "./Routes/PrivateRoute";
import { PublicRoure } from "./Routes/PublicPoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoure>
                <Contacts />
              </PrivateRoure>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoure>
              <Login />
            </PublicRoure>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoure>
              <Register />
            </PublicRoure>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
