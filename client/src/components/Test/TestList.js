import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { fetchQuestion } from '../../http/questionAPI';
import { observer } from 'mobx-react-lite';
import QuestionOne from './QuestionOne';
import '../../Styles/testList.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchAnswer } from '../../http/answerAPI';
import { CONGRATULATION_ROUTE, EXERCISES_ROUTE } from '../../utils/consts';
import CustomButton from '../Form/CustomButton';
import { useForm } from 'react-hook-form';
const TestList = observer(() => {
  const { testStore } = useContext(Context);
  const params = useParams();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [isTesting, setIsTestig] = useState(true);
  const [testResult, setTestResult] = useState([]);
  useEffect(() => {
    fetchQuestion().then((data) => {
      testStore.setQuestion(data);
      console.log('data question = ', data);
      setTestResult([
        ...testF(params.id, data).map((oneItem) => {
          return {
            id: oneItem.id,
            question: oneItem.question,
            selected: 0,
            answers: 0,
          };
        }),
      ]);
    });
    fetchAnswer().then((data) => {
      testStore.setAnswer(data);
    });
  }, []);
  const testF = (id, questions) => {
    let filterQuestion = questions?.filter((question) => id == question.testId);
    return filterQuestion;
  };
  const countRight = () => {
    var count = 0;
    testResult.map((oneItem) => {
      if (oneItem.answers == oneItem.selected) {
        count++;
      }
    });
    return count;
  };
  return (
    <div>
      <div>
        {testF(params.id, testStore.questions).map((question, i) => {
          return (
            <QuestionOne
              isTesting={isTesting}
              setTestResult={setTestResult}
              testResult={testResult}
              key={i}
              question={question}
              i={i + 1}
              answers={testStore.answers}
            />
          );
        })}
      </div>
      {testStore.setIndexTest(0)}
      {!isTesting && (
        <div className="statistics">
          Statistics of your response <span> {countRight()}</span>/{testResult.length}
        </div>
      )}
      <div className="finish-button-block">
        <CustomButton
          title="Finish"
          onClick={() => {
            console.log('finish test');
            if (isTesting) {
              setIsTestig(false);
            } else {
              navigate(EXERCISES_ROUTE);
            }
          }}
        />
      </div>

      {/* <Link to={CONGRATULATION_ROUTE} >
            <div className="block_button-test_list blue_button-little" >
                Finish
            </div>
        </Link> */}
    </div>
  );
});

export default TestList;
