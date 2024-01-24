import { useState } from "react";
import styles from "./form.module.scss";
import ContactList from "./ContactList";
import inputs from "../constants/inputs.js"
import { v4 } from "uuid";
function Form() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [form, setForm] = useState({
        id:"",
        name : '',
        lastname:'',
        email:'',
        phone:''
    });
    const changeHandler = (event)=>{
       setAlert("");
        const name = event.target.name;
        const value = event.target.value;
        setForm(form => ({...form, [name] : value}));
    }
    const addHandler = event =>{
        event.preventDefault();
        if(!form.name || !form.lastname || !form.email || !form.phone){
            setAlert("please enter valid data");
            return;
        }
        setAlert("");
        const newContacts = {...form, id: v4()};
       setContacts(contacts=> ([...contacts,newContacts]));
       console.log(contacts);
       setForm({
        id:"",
        name : '',
        lastname:'',
        email:'',
        phone:''
       })
    }
    const deleteHandler =(id)=>{
        const newContacts = contacts.filter(contact=> contact.id !== id);
        setContacts(newContacts);
    }
    return (
        <>
        <div className={styles.container}>
            <form>
                {
                    inputs.map((input,index)=>(<input key={index} type={input.type} name={input.name} placeholder={input.placeholder} value={form[input.name]} onChange={changeHandler} />
                    ))
                }
                <button onClick={addHandler}>Add Contact</button>
            </form>
        </div>
        <div className={styles.alertContainer}>{alert&& <p className={styles.alert}>{alert}</p>}</div>

        <ContactList contacts={contacts} deleteHandler={deleteHandler}></ContactList>
        </>
    );
}

export default Form;