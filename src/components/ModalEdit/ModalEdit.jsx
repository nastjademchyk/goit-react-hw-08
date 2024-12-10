import { Form, Formik, Field, ErrorMessage } from "formik";
import s from "./ModalEdit.module.css";
import * as Yup from "yup";
import React from "react";

export const ModalEdit = ({ initialValues, onSave }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    onSave(values);
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={s.form}>
            <div className={s.search_lines}>
              <div className={s.block}>
                <label className={s.title} htmlFor="">
                  Name
                </label>
                <Field type="text" name="name" className={s.input} />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={s.error}
                />
              </div>
              <div className={s.block}>
                <label className={s.title} htmlFor="">
                  Number
                </label>
                <Field className={s.input} type="text" name="number" />
                <ErrorMessage
                  name="number"
                  component="span"
                  className={s.error}
                />
              </div>
            </div>
            <button className={s.btn} type="submit">
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
