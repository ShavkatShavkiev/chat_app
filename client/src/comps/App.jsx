import React from "react";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function App() {
  const [id, setid] = useLocalStorage('id');

  return (
    <>
      {id}
      <Login setid={setid}/>
    </>
  )
  // if(!id) {
  //   return (
  //   <>
  //   {id}
  //   <Login setid={setid} />
  //   </>
  //   )
  // } else {
  //   return (<h1>Test</h1>)
  // }
}
