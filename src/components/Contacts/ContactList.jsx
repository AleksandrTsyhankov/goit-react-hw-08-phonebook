import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactStyles.module.css';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import Button from '@mui/material/Button';


function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    
        return (
            <>
                <ul className={s.contactsList}>
                    {contacts.map(contact => (
                        <li
                            key={contact.id}
                            className={s.contactsListItem}
                        > {contact.name}: {contact.number}

                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => dispatch(deleteContact(contact.id))}
                                className={s.delBtn}
                            >-</Button>
                        </li>
                    ))}
                </ul>
            </>
        );
};

export default ContactList;