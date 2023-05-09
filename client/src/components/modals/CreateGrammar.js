import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import { createGrammar } from '../../http/grammarAPI';

const CreateGrammar = ({show, onHide}) => {
    const [topic, setTopic] = useState('')
    const addGrammar = () => {
        createGrammar({topic}).then(data => {
            setTopic('')
            onHide()
        })
    }
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new vocabulary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                onChange = {e => setTopic(e.target.value)}
                value={topic}  
                placeholder ={"input topic"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addGrammar}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateGrammar