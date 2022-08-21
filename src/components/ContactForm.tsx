import { FormEvent, useState } from "react";
import Contact from "../models/Contact";
import "./ContactForm.css";

interface Props {
  onAdd: (contact: Contact) => void;
}

const ContactForm = ({ onAdd }: Props) => {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ fullName, number, isFavorite });
  };

  return (
    <form className="ContactForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="checkbox"
        name="isFavorite"
        id="isFavorite"
        checked={isFavorite}
        onChange={(e) => setIsFavorite(e.target.checked)}
      />
      <label htmlFor="isFavorite">Favorite?</label>
      <button>Add</button>
    </form>
  );
};

export default ContactForm;
