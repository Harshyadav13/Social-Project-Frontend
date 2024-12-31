import { Button, TextField } from "@mui/material";
import { Formik, Field, ErrorMessage, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const [formValue, setFormValue] = useState();

  const handleSubmit = (values) => {
    console.log("handle submit", values);
    setFormValue(values);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
            </div>
            <ErrorMessage name="email" component={"div"} className="text-red-500" />
          </div>

          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </div>
          <ErrorMessage name="password" component="div" className="text-red-500" />

        <Button sx={{ padding: ".8rem 0 rem"}} fullWidth type="submit" variant="contained" color="primary">Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
