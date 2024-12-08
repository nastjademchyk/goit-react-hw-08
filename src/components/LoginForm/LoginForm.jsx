// import React from "react";
import s from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const [showPassword, setShowPassword] = useState(false);

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters!")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter!")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter!")
      .matches(/[0-9]/, "Password must contain at least one number!")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@$!%*?&)"
      )
      .required("Required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        autoComplete="off"
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label
              htmlFor={emailFieldId}
              className={
                errors.email && touched.email ? s["required-label"] : ""
              }
            >
              Email
            </label>
            <Field
              className={`${s.label} ${
                touched.email && errors.email ? s["input-error"] : ""
              }`}
              type="email"
              name="email"
              id={emailFieldId}
            />
            {touched.email && errors.email && (
              <ErrorMessage
                name="email"
                component="span"
                className={s["error-message"]}
              />
            )}

            <label
              htmlFor={passwordFieldId}
              className={
                errors.password && touched.password ? s["required-label"] : ""
              }
            >
              Password
            </label>
            <div className={s.passwordWrapper}>
              <span
                className={s.passwordIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              <Field
                className={`${s.label} ${
                  touched.password && errors.password ? s["input-error"] : ""
                }`}
                type={showPassword ? "text" : "password"}
                name="password"
                id={passwordFieldId}
              />
            </div>
            {touched.password && errors.password && (
              <ErrorMessage
                name="password"
                component="span"
                className={s["error-message"]}
              />
            )}

            <button type="submit" className={s.btn}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
