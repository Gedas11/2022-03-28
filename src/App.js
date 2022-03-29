import Contacts from "./Contacts/Contacts";
import NewContact from "./NewContact/NewContact";

function App() {
   
//  const addContactHandler = contact => {
//   setHandler((prevContacts) => {
//     return [contact, ...prevContacts]
//   })
// }
  return (
    <div className="App">
      <NewContact  />
      {/* <Contacts item={Contacts}/> */}
      
    </div>
  );
}

export default App;
