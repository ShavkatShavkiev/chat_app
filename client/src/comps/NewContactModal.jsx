import React,{useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewContactModal({closeModal}) {

  const idREF = useRef()
  const nameREF = useRef()

  function handleSubmit(e){
    e.preventDefault()

    //createContact(idREF.current.value, nameREF.current.value)
    closeModal()
  }


  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>ID:</Form.Label>
              <Form.Control type='text' ref={idREF} required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Name:</Form.Label>
              <Form.Control type='text' ref={nameREF} required />
            </Form.Group>
            <Button type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
