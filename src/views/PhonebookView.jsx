import ContactForm from '../components/Contacts/ContactForm';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Filter/Filter';
import s from '../App.module.css';


function Phonebook() {
  
  return (
      <>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        
        <h2 className={s.title}>Contacts</h2>
        <Filter/>
        
        <ContactList />
      </>
    )
};

export default Phonebook;