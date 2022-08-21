import { useState } from "react";
import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import "./ContactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { fullName: "Lisa Cuckovich", number: "248-248-2488", isFavorite: true },
    { fullName: "Leon Cuckovich", number: "248-248-2489", isFavorite: true },
    { fullName: "Bob Burger", number: "248-248-2487", isFavorite: false },
  ]);

  const deleteAContact = (index: number): void => {
    setContacts((prev) => {
      const newList: Contact[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  const addAContact = (contact: Contact): void => {
    setContacts((prev) => {
      const newList: Contact[] = prev.slice(0);
      newList.push(contact);
      return newList;
    });
  };

  return (
    <div className="ContactList">
      <ContactForm onAdd={addAContact} />
      <ul>
        {contacts.map((item, index) => (
          <ContactCard contact={item} onDelete={() => deleteAContact(index)} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
