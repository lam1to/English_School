import React from 'react'

const AnswerOne = ({answer,j}) => {
  return (
    <div>
        <div className='answerOne-answer'>
            <input className='custom-radio'  name= {answer.questionId} type='radio' id= {answer.content + j}>
            </input>
            <label  htmlFor = {answer.content + j} >{j+1 +". " +  answer.content} </label>
        </div>
    </div>
  )
}

export default AnswerOne