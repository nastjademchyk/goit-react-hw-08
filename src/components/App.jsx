import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/contactsOps";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone book</h1>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
