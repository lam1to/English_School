import React, { useContext, useEffect, useState} from 'react'
import AnswerOne from './AnswerOne'
import { Context } from '../..'


const QuestionOne = ({question,i,answers}) => {
    const filterAnswers = () => {
        return answers.filter(answer => answer.questionId == question.id)
    }
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
            {filterAnswers().map((answer, j) => 
                <AnswerOne key={j} answer={answer} j={j} />
            )}
            </div>
        </form>
                
    </div>
  )
}

export default QuestionOne