import React, { useContext, useEffect, useState} from 'react'
import AnswerOne from './AnswerOne'
import { Context } from '../..'


const QuestionOne = ({question,i,answers}) => {
    
  return (
    <div>
        <div className='questionOne_question'>
            {i + ". " + question.question}
        </div>
        <div className='questionOne-title-answer'>
            Response options:
        </div>
        <form >
            <div className='answer-list'>
            {answers?.map((answer, j) => 
                question.id === answer.questionId && <AnswerOne key={j} answer={answer} j={j} />
            )}
            </div>
        </form>
                
    </div>
  )
}

export default QuestionOne