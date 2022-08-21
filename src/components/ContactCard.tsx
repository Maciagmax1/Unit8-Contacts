import Contact from "../models/Contact";
import "./ContactCard.css";

interface Props {
  contact: Contact;
  onDelete: () => void;
}

const ContactCard = ({ contact, onDelete }: Props) => {
  return (
    <li className="ContactCard">
      <p>Fullname: {contact.fullName}</p>
      <p>Number: {contact.number}</p>
      {contact.isFavorite ? <p>&hearts;</p> : <p>Not a favorite</p>}
      <button onClick={() => onDelete()}>X</button>
    </li>
  );
};

export default ContactCard;
