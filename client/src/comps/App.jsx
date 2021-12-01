import React, { useState } from "react";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [id, setid] = useState("");

  if(!id) {
    return (<Login setid={setid} />)
  } else {
    return (<h1>Test</h1>)
  }
}
