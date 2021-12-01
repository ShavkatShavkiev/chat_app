import React,{useRef} from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidV4} from 'uuid'

export default function Login({setid}) {
  const idRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    setid(idRef.current.value)
  }

  function createNewID(){
    setid(uuidV4())
  }

  return (
    <Container className='background align-items-center justify-content-center d-flex' style={{width:'100%',height: '100vh'}}>
        <Form className='w-100 justify-content-center d-flex flex-column' onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter Your ID:</Form.Label>
            <Form.Control type='text' ref={idRef} required></Form.Control >
          </Form.Group>
          <Button type='submit' variant='success' className='m-2'>Login</Button>
          <Button className='m-2' variant='secondary' onClick={createNewID}>Create New ID</Button>
        </Form>
    </Container>
  )
}
