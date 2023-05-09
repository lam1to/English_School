import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createVocabulary } from '../../http/vocabularyAPI.js';


const CreateVocabulary = ({show, onHide}) => {
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [img, setImg] = useState(null)
    const addVocabulary = () => {
        const formData = new FormData()
        formData.append('topic', topic)
        formData.append('description', description)
        formData.append('content', content)
        formData.append('img', img)
        createVocabulary(formData).then(data => {
            setTopic('')
            onHide()
        })
    }

    const selectFile = e => {
        setImg(e.target.files[0])
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
                onChange = {e => setDescription(e.target.value)}
                value={description}  
                className='mb-5'
                placeholder ={"input description"}
            />
            <Form.Control
                onChange = {e => setContent(e.target.value)}
                value={content}  
                className='mb-5'
                placeholder ={"input content"}
            />
            <Form.Control
                className='mb-5'
                type = "file"
                onChange={selectFile}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addVocabulary}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateVocabulary