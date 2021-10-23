import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('Contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('Contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('Contacts/fetchContactsError');

export const addContactRequest = createAction('Contacts/addContactRequest');
export const addContactSuccess = createAction('Contacts/addContactsuccess');
export const addContactError = createAction('Contacts/addContactError');

export const deleteContactRequest = createAction('Contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('Contacts/deleteContactsuccess');
export const deleteContactError = createAction('Contacts/deleteContactError');

export const filterContacts = createAction('contacts/filter');