import React from "react";

import Card from "../UI/Card";
import "./ContactItem.css";

const ContactItem = (props) => {
  return (
    <li>
      <Card className="contact-item">
        <div className="contact-item__description">
          <h2>{props.name}</h2>
          <div className="contact-item__surname">{props.surname}</div>
        </div>
      </Card>
    </li>
  );
};

export default ContactItem;
