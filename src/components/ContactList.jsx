import styles from "./contactList.module.scss";
import ContactItem from "./ContactItem";
// import React from 'react';

function ContactList({contacts,deleteHandler}) {
  console.log(contacts);
    return (
       
        <div >
           <h3>Contacts List</h3> 
           {contacts.length ? (<ul>
            {contacts.map(contact=> (
                <ContactItem key={contact.id} contact={contact} deleteHandler={deleteHandler}></ContactItem>
            ) )
            }
           </ul>) : <p className={styles.message}>No Contact yet!</p>}
           
        </div>
    );
}

export default ContactList;