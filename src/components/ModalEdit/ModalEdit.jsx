import { Form, Formik, Field, ErrorMessage } from "formik";
import s from "./ModalEdit.module.css";
import * as Yup from "yup";
import React from "react";

const ModalEdit = ({ initialValues, onSave }) => {
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
            <div className={s.buttons}>
              <button className={s.btnClose} type="submit">
                Cancel
              </button>
              <button className={s.btnSave} type="submit">
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ModalEdit;
