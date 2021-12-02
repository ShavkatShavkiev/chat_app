import React, { useContext } from 'react'
import useLocalStorage from "../hooks/useLocalStorage.js";

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContextProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  function createContact(id, name){
    setContacts(prev => {
      return [...prev, {id, name}]
    })
  }

  return (
      <ContactsContext.Provider value = {{ contacts, createContact }}>
        {children}
      </ContactsContext.Provider>
  )

}
