import React from 'react'
import { useContacts } from '../contexts/ContactsContext'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {

  const { contacts } = useContacts()

  return (
    <ListGroup variant='flaush'>
        {contacts.map((contact, index) => (
          <ListGroup.Item key={index}>
            {contact.name} <br/>
            {contact.id}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}
