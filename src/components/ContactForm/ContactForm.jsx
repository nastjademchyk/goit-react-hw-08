import s from "./ContactForm.module.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";

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

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    toast.success("Contact has been added!");
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.search_lines}>
            <div className={s.block}>
              <label className={s.title} htmlFor="name">
                Name
              </label>
              <Field type="text" name="name" className={s.input} />
              <ErrorMessage name="name" component="span" className={s.error} />
            </div>
            <div className={s.block}>
              <label className={s.title} htmlFor="number">
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
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
