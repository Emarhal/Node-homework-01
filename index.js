const fs = require("fs").promises;
const contacts = require("./contacts");
const argv = require("yargs").argv;

// const products = contacts.listContacts();
// products.then((data) => console.log(data)).catch((error) => console.log(error));

// const id = 2;
// const contact = contacts.getContactById(id);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

// const id = 2;

// const contact = contacts.removeContact(id);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

// const newContact = {
//   name: "Gala Watch",
//   email: "taratara@nonenimMauris.net",
//   phone: "(555) 555-7038",
// };

// const contact = contacts.addContact(newContact);
// contact.then((data) => console.log(data)).catch((error) => console.log(error));

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = contacts.listContacts();
      contactList
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      break;

    case "get":
      const contactGet = contacts.getContactById(id);
      contactGet
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "add":
      const newContact = {
        name,
        email,
        phone,
      };

      const contactAdd = contacts.addContact(newContact);
      contactAdd
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "remove":
      const contactDel = contacts.removeContact(id);
      contactDel
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
