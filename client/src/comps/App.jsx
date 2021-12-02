import React from "react";
import Login from "./Login";
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from "../hooks/useLocalStorage.js";
import { ContextProvider } from '../contexts/ContactsContext'
import { ConversationsProvider } from '../contexts/ConversationsProvider'

export default function App() {
  const [id, setid] = useLocalStorage('id');
  const dashBoard = (
    <ContextProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContextProvider>
  )

  return id ? dashBoard : <Login setid={setid} />
}
