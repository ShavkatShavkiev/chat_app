import React, { useState } from "react";
import Login from "./Login";

export default function App() {
  const [id, setid] = useState("");

  return(
    <Login />
  )
}
