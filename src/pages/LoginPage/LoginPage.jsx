import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="enter your password"
          ></Field>
          <button type="submit">Login</button>
          <p>
            You don`t have account?<NavLink to="/register">Sing up</NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
