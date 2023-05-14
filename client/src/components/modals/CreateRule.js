import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import { createRule } from '../../http/ruleAPI';

const CreateRule = ({show, onHide}) => {
    const [topic, setTopic] = useState('')
    const [content, setContent] = useState('')
    const [grammarId, setGrammarId] = useState('')
    const addRule = () => {
        createRule({topic,content,grammarId}).then(data => {
            setTopic('')
            setContent('')
            setGrammarId('')
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
          Add new rule
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
                onChange = {e => setContent(e.target.value)}
                value={content}  
                className='mb-5'
                placeholder ={"input content"}
            />
             <Form.Control
                onChange = {e => setGrammarId(e.target.value)}
                value={grammarId} 
                placeholder ={"input grammarId"}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addRule}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateRule