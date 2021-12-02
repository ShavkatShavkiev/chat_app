import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversation() {
  const { conversations } = useConversations()

  return (
    <ListGroup variant='flush'>
        {conversations.map((convo, index) => (
          <ListGroup.Item key={index}>
            {convo.recipients.map(r => r.name).join(', ')}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}