import React, {useState} from 'react'
import '../Styles/admin.css'
import CreateVocabulary from '../components/modals/CreateVocabulary';
import CreateGrammar from '../components/modals/CreateGrammar';
import CreateTest from '../components/modals/CreateTest';
import '../Styles/bootstrap.min.css'
import CreateRule from '../components/modals/CreateRule';
import CreateQuestion from '../components/modals/CreateQuestion';
import CreateAnswer from '../components/modals/CreateAnswer';



export const Admin = () => {
  const [show, setShow] = useState(false);
  const [grammarVisible, setGrammarVisible] = useState(false)
  const [testVisible, setTestVisible] = useState(false)
  const [vocabularyVisible, setVocabularyVisible] = useState(false)
  const [ruleVisible, setRuleVisible] = useState(false)
  const [questionVisible, setQuestionVisible] = useState(false)
  const [answerVisible, setAnswerVisible] = useState(false)
  
  return (
    <div className='main_admin'> 
      <div className='main_container _container'>
          <div className='admin_row'>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add grammar item
                  </div>
                  <a   className="block_admin-item_button">
                      <div onClick={() => setGrammarVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add rule item
                  </div>
                  <a  className="block_admin-item_button">
                      <div onClick={() =>setRuleVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add vocabulary item
                  </div>
                  <a  className="block_admin-item_button">
                      <div onClick={() => setVocabularyVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add test item
                  </div>
                  <a  className="block_admin-item_button">
                      <div onClick={() =>setTestVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add question item
                  </div>
                  <a  className="block_admin-item_button">
                      <div onClick={() =>setQuestionVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
              <div className='admin_item_container'>
                  <div className='admin_item-name'>
                      Add answer item
                  </div>
                  <a  className="block_admin-item_button">
                      <div onClick={() =>setAnswerVisible(true)} className="blue_button-little" >
                          Add
                      </div>
                  </a>
              </div>
             
              
          </div>
          <CreateGrammar show={grammarVisible} onHide={() =>setGrammarVisible(false)}/>
          <CreateVocabulary show = {vocabularyVisible} onHide={ () =>setVocabularyVisible(false)}/>
          <CreateTest show = {testVisible} onHide={() =>setTestVisible(false)}/>
          <CreateRule show={ruleVisible} onHide={() => setRuleVisible(false)}/>
          <CreateQuestion show={questionVisible} onHide={() => setQuestionVisible(false)}/>
          <CreateAnswer show={answerVisible} onHide={() => setAnswerVisible(false)}/>
      </div>
      
    </div>
  )
}
