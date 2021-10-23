import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,

    addContactRequest,
    addContactSuccess,
    addContactError,

    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,

    filterContacts
} from './phonebook-actions';
// import { fetchContacts } from './phonebook-operations';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    loading,
    error,
    filter,
});
