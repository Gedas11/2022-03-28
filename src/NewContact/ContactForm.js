import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredAdress, setEnteredAddress] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const AddressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contactData = {
      name: enteredName,
      surname: enteredSurname,
      adress: enteredAdress,
    };

    props.onSaveContactData(contactData);
    setEnteredName("");
    setEnteredSurname("");
    setEnteredAddress("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-contact__controls">
        <div className="new-contact__control">
          <label>Name</label>

          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-contact__control">
          <label>Surname</label>
          <input
            type="text"
            value={enteredSurname}
            onChange={surnameChangeHandler}
          />
        </div>
        <div className="new-contact__control">
          <label>Address</label>
          <input value={enteredAdress} onChange={AddressChangeHandler} />
        </div>
      </div>
      <div className="new-contact__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add New Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
