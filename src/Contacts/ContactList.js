import React from "react";

import "./ContactList.css";
import ContactItem from "./ContactItem";

const ContactList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="contact-list__fallback">Found no contact.</h2>;
  }

  return (
    <ul className="contact-list">
      {props.item.map((contact, i) => (
        <ContactItem
          key={i}
          name={contact.name}
          surname={contact.surname}
          address={contact.address}
        />
      ))}
      ;
    </ul>
  );
};

export default ContactList;