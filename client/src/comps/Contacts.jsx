import React from 'react'
import { useContacts } from '../contexts/ContactsContext'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {

  const { contacts } = useContacts()

  return (
    <ListGroup variant='flush'>
        {contacts.map((contact, index) => (
          <ListGroup.Item key={contact.id}>
            {contact.name} <br/>
            {contact.id}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
