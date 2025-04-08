'use client';

/* eslint-disable import/extensions */

import { ListGroup } from 'react-bootstrap';
import { Note } from '@prisma/client';

const NoteItem = ({ note }: { note: Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
