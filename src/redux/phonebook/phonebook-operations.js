import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,

    addContactRequest,
    addContactSuccess,
    addContactError,

    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './phonebook-actions';


// GET @ /contacts
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

// DELETE @ /tasks/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export { fetchContacts, addContact, deleteContact };