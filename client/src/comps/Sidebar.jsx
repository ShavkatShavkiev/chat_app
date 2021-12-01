import React, { useState } from 'react'
import { Tab, Nav, Button, Modal} from "react-bootstrap";
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

const CONVERSATION_KEY = 'Conversations'
const CONTACT_KEY = 'Contacts'

export default function Sidebar({id}) {
  const [activeKey, setactiveKey] = useState(CONVERSATION_KEY)
  const converstionOpen = activeKey === CONVERSATION_KEY
  const [modalOpen, setModalOpen] = useState(false)

  function closeModal(){
    setModalOpen(false)
  }

  return (
    <div style={{width: '250px'}} className='d-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect={setactiveKey} >
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='border overflow-auto flex-grow-1'>
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className='p2 border small'>
          Your ID is:<span className='text-muted'>{id}</span>
        </div>
        <Button className='rounded-0' onClick={() => setModalOpen(true)}>
          New {converstionOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {converstionOpen ? <NewConversationModal closeModal={closeModal}/> : <NewContactModal closeModal={closeModal}/>}
      </Modal>
    </div>
  )
}
