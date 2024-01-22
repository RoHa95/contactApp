import styles from "./contactList.module.scss";
// import React from 'react';

function ContactList({contacts}) {
  console.log(contacts);
    return (
       
        <div>
           <h3>Contacts List</h3>
           <ul>
            {contacts.map(contact=> (
                <li key={contact.id}>
                    <span>{contact.name + " "} {contact.lastname}</span>
                    <span>{contact.email}</span>
                    <span>{contact.phone}</span>
                </li>
            ) )
            }
           </ul>
        </div>
    );
}

export default ContactList;