import { Button, TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material"; // Added Radio, RadioGroup, and FormControlLabel
import { Formik, Field, ErrorMessage, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

// Initial form values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "female", // Added default gender value
};

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"), // Added gender validation
});

const Register = () => {
  const [gender , setFormValue] = useState();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    setFormValue(values);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          {/* First Name Field */}
          <div>
            <Field
              as={TextField}
              name="firstName"
              placeholder="First Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500" />
          </div>

          {/* Last Name Field */}
          <div>
            <Field
              as={TextField}
              name="lastName"
              placeholder="Last Name"
              type="text"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500" />
          </div>

          {/* Email Field */}
          <div>
            <Field
              as={TextField}
              name="email"
              placeholder="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          {/* Password Field */}
          <div>
            <Field
              as={TextField}
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          {/* Gender Field */}
          <div>
            <Field name="gender">
              {({ field }) => (
                <RadioGroup
                  {...field}
                  aria-label="gender "
                  name="gender"
                  row
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              )}
            </Field>
            <ErrorMessage name="gender" component="div" className="text-red-500" />
          </div>

          {/* Submit Button */}
          <Button
            sx={{ padding: "0.8rem 0" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
