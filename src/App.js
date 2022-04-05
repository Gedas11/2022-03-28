import ContactItem from "./Contacts/ContactItem";
import NewContact from "./NewContact/NewContact";
import { useState } from "react";
import ContactList from "./Contacts/ContactList";
import ContactForm from "./NewContact/ContactForm";

function App() {
  const [crudData, setcrudData] = useState(ContactItem);
  const onSave = (form) => {
    const copyData = { ...crudData };
    copyData.item.push(form);
    setcrudData(copyData);
  };
  return (
    <div className="App">
      <NewContact ContactItem={crudData}>
        <ContactList ContactItem={crudData} />
      </NewContact>

      <ContactForm save={onSave} />
    </div>
  );
}

export default App;
