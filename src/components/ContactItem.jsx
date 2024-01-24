import styles from "./contactItem.module.scss";
function ContactItem({contact,deleteHandler}) {
    console.log(contact);
   
    return (
        <li className={styles.item}>
            <p >{contact.name+" "}{contact.lastname}</p>
            <p ><span></span>{contact.email}</p>
            <p ><span></span>{contact.phone}</p>
            <span className={styles.delete} id={contact.id} onClick={()=>deleteHandler(contact.id)}>delete</span>
        </li>
    );
}

export default ContactItem;