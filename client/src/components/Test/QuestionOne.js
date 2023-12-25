import React, { useContext, useEffect, useState } from 'react';
import AnswerOne from './AnswerOne';
import { Context } from '../..';

const QuestionOne = ({
  question,
  i,
  answers,
  setTestResult,
  isTesting,
  testResult,
}) => {
  const filterAnswers = () => {
    return answers.filter((answer) => answer.questionId == question.id);
  };
  return (
    <div>
      <div className="questionOne_question">{i + '. ' + question.question}</div>
      <div className="questionOne-title-answer">Response options:</div>
      <form>
        <div className="answer-list">
          {filterAnswers().map((answer, j) => (
            <AnswerOne
              testResult={testResult}
              isTesting={isTesting}
              key={j}
              answer={answer}
              j={j}
              question={question}
              setTestResult={setTestResult}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default QuestionOne;
