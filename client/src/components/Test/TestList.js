import React, { useContext, useEffect, useState} from 'react'
import { Context } from '../..'
import { fetchQuestion } from '../../http/questionAPI'
import { observer } from 'mobx-react-lite'
import QuestionOne from './QuestionOne';
import '../../Styles/testList.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { fetchAnswer } from '../../http/answerAPI';
import { CONGRATULATION_ROUTE } from '../../utils/consts';
const TestList = observer(() => {
    const {test} = useContext(Context)
    const params = useParams()
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        fetchQuestion().then(data => {test.setQuestion(data)})
        fetchAnswer().then(data => {test.setAnswer(data)})
      },[])
    const testF = (id, test) => {
       let filterQuestion = test.questions?.filter((question) => id == question.testId)
       return filterQuestion
    }

  return (
    <div>
        <div>
            {testF(params.id, test).map((question,i) => 
                <QuestionOne key={i} question={question} i = {i + 1} answers={test.answers}/>
            )}
        </div>
        {test.setIndexTest(0)}
        <Link to={CONGRATULATION_ROUTE} >
            <div className="block_button-test_list blue_button-little" >
                Finish
            </div>
        </Link>
    </div>
  )
});

export default TestList