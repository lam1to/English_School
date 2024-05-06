import React, { useEffect } from 'react';

const AnswerOne = ({ answer, j, question, setTestResult, isTesting, testResult }) => {
  useEffect(() => {
    if (answer.isRight && isTesting) {
      setTestResult((prev) => [
        ...prev.map((oneItem) => {
          if (oneItem.id == question.id) {
            oneItem.answers = answer.id;
          }
          return oneItem;
        }),
      ]);
    }
  }, [answer]);
  const newCurrentAnswer = (answerId) => {
    setTestResult((prev) => {
      return prev.map((oneItem) => {
        if (oneItem.id == question.id) {
          oneItem.selected = answerId;
        }
        return oneItem;
      });
    });
  };
  const isSelected =
    testResult.filter((oneItem) => oneItem.id == question.id)[0]?.selected === answer.id;
  return (
    <div>
      <div className="answerOne-answer">
        {isTesting ? (
          <>
            <input
              onChange={(e) => {
                newCurrentAnswer(answer.id);
              }}
              className="custom-radio"
              name={answer.questionId}
              type="radio"
              id={answer.content + j}
            ></input>
            <label htmlFor={answer.content + j}>
              {j + 1 + '. ' + answer.content}
              {/* {answer.isRight && <span>xui</span>} */}
            </label>
          </>
        ) : (
          <label htmlFor={answer.content + j}>
            {isSelected && !answer.isRight ? (
              <span className="no-right">{j + 1 + '. ' + answer.content}</span>
            ) : isSelected && answer.isRight ? (
              <span className="right">{j + 1 + '. ' + answer.content}</span>
            ) : !isSelected && answer.isRight ? (
              <span className="right">{j + 1 + '. ' + answer.content}</span>
            ) : (
              <span>{j + 1 + '. ' + answer.content}</span>
            )}
          </label>
        )}
      </div>
    </div>
  );
};

export default AnswerOne;
