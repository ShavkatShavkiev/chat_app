import React from "react";
import Login from "./Login";
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function App() {
  const [id, setid] = useLocalStorage('id');

    return id ? <Dashboard id={id}/> : <Login setid={setid} />
}
