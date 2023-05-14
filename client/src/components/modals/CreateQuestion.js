import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import { createQuestion } from '../../http/questionAPI';


const CreateQuestion = ({show, onHide}) => {
    const [question, setQuestion] = useState('')
    const [testId, setTestId] = useState('')
    const addQuestion = () => {
        createQuestion({question, testId}).then(data => {
            setQuestion('')
            setTestId('')
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
          Add new question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                onChange = {e => setQuestion(e.target.value)}
                value={question}  
                className='mb-5'
                placeholder ={"input question"}
            />
             <Form.Control
                onChange = {e => setTestId(e.target.value)}
                value={testId}  
                className='mb-5'
                placeholder ={"input testId"}
            />
      
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addQuestion}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateQuestion