import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
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

export default Login;
