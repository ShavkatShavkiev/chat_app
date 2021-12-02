import React from "react";
import Login from "./Login";
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from "../hooks/useLocalStorage.js";
import { ContextProvider } from '../contexts/ContactsContext'

export default function App() {
  const [id, setid] = useLocalStorage('id');
  const dashBoard = (
    <ContextProvider>
        <Dashboard id={id} />
    </ContextProvider>
  )

  return id ? dashBoard : <Login setid={setid} />
}
