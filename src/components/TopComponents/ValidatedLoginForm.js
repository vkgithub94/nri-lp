import React from "react";
import './Signup.css';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "", phoneNo: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      phoneNo: Yup.string()
        .required("Please enter your Mobile No.")
        .min(10, "Please enter valid Mobile no.")
        .matches(/([0-9])/, "+"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <input 
            className="input-field1"
            name="email"
            type="text"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <input 
            className="input-field2" 
            type="text" 
            name="number" 
            placeholder="Phone no." 
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phoneNo && touched.phoneNo && "error"}
            />
            {errors.phoneNo && touched.phoneNo && (
            <div className="input-feedback">{errors.phoneNo}</div>
          )}
          <input
            className="input-field3"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <input className="get-started" type="submit" disabled={isSubmitting}value="Get Started" />
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;