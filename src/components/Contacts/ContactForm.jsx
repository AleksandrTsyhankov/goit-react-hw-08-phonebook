import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactStyles.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';



function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    const clearState = () => {
        setName('');
        setNumber('');

        return;
    }

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

     const handleSubmitForm = e => {
         e.preventDefault();

         const availableContact = contacts.find(contact =>  contact.name.toLowerCase() === name.toLowerCase())
        
            if (availableContact) {
                alert(`${availableContact.name} is already in contacts.`);
                return;
         };
         
        dispatch(addContact(name, number));
        clearState();
    }


return ( 
<div className={s.contactFormContainer}>
            <form className={s.form} onSubmit={handleSubmitForm}>
                <label className={s.label} >Name</label>
                    <TextField
                    className={s.inputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                    value={name}
                    />

                    <label className={s.label} >Number</label>
                    <TextField
                    className={s.inputTel}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    value={number}
                />

                <Button
                    className={s.btn}
                    type="submit"
                variant="contained"
                sx={{ mt: "10px" }}
                >
                   <span className={s.btnText}>Add contact</span> 
                </Button>
                </form>
</div>
        );
};

export default ContactForm;