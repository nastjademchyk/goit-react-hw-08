import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css";
import { Hourglass } from "react-loader-spinner";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <DocumentTitle>Your contacts</DocumentTitle>
      <h1>Phone book</h1>
      {isLoading && (
        <Hourglass
          visible={true}
          height="30"
          width="30"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#black", "#white"]}
        />
      )}
      {error && <b>{error}</b>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
