import React from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

import {
  ContactContainer,
  List,
  Item,
  ItemWrapper,
  Btn,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const renderContacts = [...contacts].filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactContainer>
      <List>
        {renderContacts.map(contact => (
          <Item key={contact.id}>
            <ItemWrapper>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>

              <Btn type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </Btn>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </ContactContainer>
  );
};
