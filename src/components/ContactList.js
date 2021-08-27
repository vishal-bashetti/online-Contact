import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const renderList = props.contacts.map((contact) => {
    console.log(contact);
    return (
      <>
        <ContactCard contact={contact}></ContactCard>
      </>
    );
  });
  return (
    <div>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default ContactList;
