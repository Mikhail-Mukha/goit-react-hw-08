import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="enter your name"></Field>
          <Field name="email" placeholder="enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="enter your password"
          ></Field>
          <button type="submit">Register</button>
          <p>
            You already have account?<NavLink to="/login">Sign in</NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
