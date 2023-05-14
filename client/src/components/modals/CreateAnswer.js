import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import {createAnswer} from '../../http/answerAPI'


const CreateAnswer = ({show, onHide}) => {
    const [content, setContent] = useState('')
    const [questionId, setQuestionId] = useState('')
    const addAnswer = () => {
        createAnswer({content, questionId}).then(data => {
            setQuestionId('')
            setContent('')
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
          Add new Answer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                onChange = {e => setContent(e.target.value)}
                value={content}  
                className='mb-5'
                placeholder ={"input content"}
            />
             <Form.Control
                onChange = {e => setQuestionId(e.target.value)}
                value={questionId}  
                className='mb-5'
                placeholder ={"input questionId"}
            />
      
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addAnswer}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateAnswer