'use client';

/* eslint-disable import/extensions */

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Contact, Note } from '@prisma/client';
import ListGroup from 'react-bootstrap/ListGroup';
import NoteItem from './NoteItem';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact, notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {contact.description}
      </Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
    </Card.Body>
    <Card.Footer className="blockquote-footer">
      {contact.owner}
    </Card.Footer>
  </Card>
);

export default ContactCardAdmin;
