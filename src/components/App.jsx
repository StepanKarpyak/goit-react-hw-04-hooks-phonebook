import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import { Page } from './App.styled';


function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

const addContactInfo = personData =>  {
    const { name, number } = personData;
    const normalizedNameContact = name.toLowerCase();
    const person = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const findContactName = newNameData => contacts.find(({ name }) => name.toLowerCase() === newNameData);
    
    findContactName(normalizedNameContact)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, person]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  
  useEffect(() => { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts( parsedContacts );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Page>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactInfo} />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
      
          <ContactFilter value={filter} onChange={changeFilter} />

          
          <ContactList visibleContacts={getVisibleContacts()}
            onDeleteContact={deleteContact} />
        </>
      )}
    </Page>
  );
}

export default App;
