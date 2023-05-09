import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTest } from '../../http/testAPI';

const CreateTest = ({show, onHide}) => {
    const [topic, setTopic] = useState('')
    const [difficulte, setDifficulte] = useState('')
    const [level, setLevel] = useState('')
    const [sTopic, setSTopic] = useState('')
    const addTest = () => {
        createTest({topic,difficulte,level,sTopic}).then(data => {
            setTopic('')
            setDifficulte('')
            setLevel('')
            setSTopic('')
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
                className='mb-5'
                placeholder ={"input topic"}
            />
            <Form.Control 
                onChange = {e => setDifficulte(e.target.value)}
                value={difficulte} 
                className='mb-5'
                placeholder ={"input difficulte"}
            />
            <Form.Control 
                onChange = {e => setLevel(e.target.value)}
                value = {level}
                className='mb-5'
                placeholder ={"input level"}
            />
            <Form.Control 
                onChange = {e => setSTopic(e.target.value)}
                value = {sTopic}
                placeholder ={"input sTopic"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addTest}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTest