import { useState } from "react";
import styles from "./form.module.scss";
function Form() {
    const [contacts, setContacts] = useState([]);

    const [form, setForm] = useState({
        name : '',
        lastname:'',
        email:'',
        phone:''
    });
    const changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setForm(form => ({...form, [name] : value}));
    }
    const addHandler = event =>{
        event.preventDefault();
       setContacts(contacts=> ([...contacts,form]));
       console.log(contacts);
       setForm({
        name : '',
        lastname:'',
        email:'',
        phone:''
       })
    }
    return (
        <div className={styles.container}>
            <form>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={changeHandler} />
                <input type="text" name="lastname" placeholder="Last Name" value={form.lastname} onChange={changeHandler} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={changeHandler} />
                <input type="number" name="phone" placeholder="Phone" value={form.phone} onChange={changeHandler} />
                <button onClick={addHandler}>Add Contact</button>
            </form>
        </div>
    );
}

export default Form;