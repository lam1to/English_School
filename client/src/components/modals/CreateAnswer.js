import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../..';
import { createAnswer } from '../../http/answerAPI';

const CreateAnswer = ({ show, onHide }) => {
  const [content, setContent] = useState('');
  const [questionId, setQuestionId] = useState('');
  const [isRight, setIsRight] = useState(false);
  useEffect(() => {
    console.log('isRight = ', isRight);
  }, [isRight]);

  const addAnswer = () => {
    createAnswer({ content, questionId, isRight }).then((data) => {
      setQuestionId('');
      setContent('');
      setIsRight(false);
      onHide();
    });
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Answer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="mb-5"
            placeholder={'input content'}
          />
          <Form.Check
            onChange={(e) => setIsRight((isRight) => !isRight)}
            value={isRight}
            className="mb-5"
            placeholder={'input isRight'}
          />
          <Form.Control
            onChange={(e) => setQuestionId(e.target.value)}
            value={questionId}
            className="mb-5"
            placeholder={'input questionId'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addAnswer}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateAnswer;
