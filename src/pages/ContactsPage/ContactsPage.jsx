import React from "react";
import { DocumentTitle } from "../../components/DocumentTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Your contacts</DocumentTitle>
      <h1>Phone book</h1>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
